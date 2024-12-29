const input = await Deno.readTextFile("./puzzle06/puzzle06_input.txt");

enum MapField {
  Unvisited = ".",
  Visited = "X",
  Obstacle = "#",
  Player = "^",
}

enum Direction {
  Up,
  Right,
  Down,
  Left,
}

export function isLooping(array: Array<string>) {
  for (let loopLength = 4; loopLength <= array.length / 2; loopLength += 4) {
    const loopA = array.slice(array.length - loopLength);
    const loopB = array.slice(
      array.length - loopLength - loopLength,
      array.length - loopLength,
    );
    // console.log("arr: " + array.join("") + "\n");
    // console.log(loopA.join("") + "\n" + loopB.join("") + "\n______");

    if (loopA.join("") === loopB.join("")) {
      return true;
    }
  }
  return false;
}

const distinctLoopObstaclePositions = new Set<string>();
const map = input.split("\n").map((line) => line.split("") as Array<MapField>);
const guard = {
  map,
  distinctVisitedFieldsCount: 1,
  x: -1,
  y: -1,
  forwardMovementDelta: {
    x: 0,
    y: -1,
  },
  facesDirection: Direction.Up,
  facesField() {
    return this.map[this.y + this.forwardMovementDelta.y][
      this.x + this.forwardMovementDelta.x
    ];
  },
  reachedEndOfMap() {
    return this.y === 0 || this.y === this.map.length - 1 ||
      this.x === 0 || this.x === this.map[0].length - 1;
  },
  moveForward() {
    this.map[this.y][this.x] = MapField.Visited;
    this.y += this.forwardMovementDelta.y;
    this.x += this.forwardMovementDelta.x;

    if (this.map[this.y][this.x] === MapField.Unvisited) {
      this.distinctVisitedFieldsCount += 1;
    }
    this.map[this.y][this.x] = MapField.Player;
  },
  turnRight() {
    this.facesDirection = (this.facesDirection + 1) % 4;
    switch (this.facesDirection) {
      case Direction.Up:
        this.forwardMovementDelta = {
          x: 0,
          y: -1,
        };
        break;
      case Direction.Right:
        this.forwardMovementDelta = {
          x: 1,
          y: 0,
        };
        break;
      case Direction.Down:
        this.forwardMovementDelta = {
          x: 0,
          y: 1,
        };
        break;
      case Direction.Left:
        this.forwardMovementDelta = {
          x: -1,
          y: 0,
        };
        break;
    }
  },
  moveToTheEndOfTheMap() {
    while (this.reachedEndOfMap() === false) {
      if (this.facesField() === MapField.Obstacle) {
        this.turnRight();
        continue;
      }
      this.moveForward();
    }
  },
  testIfLoops() {
    const obstacleCandidateX = this.x + this.forwardMovementDelta.x;
    const obstacleCandidateY = this.y + this.forwardMovementDelta.y;
    const turnedRightAt: Array<string> = [];
    const obstacleCandidateHash = `${obstacleCandidateX}|${obstacleCandidateY}`;

    if (
      this.map[obstacleCandidateY][obstacleCandidateX] !== MapField.Unvisited
    ) {
      return;
    }

    if (distinctLoopObstaclePositions.has(obstacleCandidateHash)) {
      return;
    }

    this.map[obstacleCandidateY][obstacleCandidateX] = MapField.Obstacle;

    while (
      this.reachedEndOfMap() === false
    ) {
      if (this.facesField() === MapField.Obstacle) {
        turnedRightAt.push(`>${this.x}|${this.y}`);

        if (isLooping(turnedRightAt)) {
          distinctLoopObstaclePositions.add(obstacleCandidateHash);
          return;
        }

        this.turnRight();

        continue;
      }

      this.moveForward();
    }
  },
  findLoopsCount() {
    while (this.reachedEndOfMap() === false) {
      if (this.facesField() === MapField.Obstacle) {
        this.turnRight();
        continue;
      }

      const guardSimulator = {
        ...this,
        forwardMovementDelta: {
          ...this.forwardMovementDelta,
        },
        map: this.map.map((row) => [...row]),
      };

      guardSimulator.testIfLoops();
      this.moveForward();
    }
  },
};

for (let y = 0; y < map.length; y++) {
  for (let x = 0; x < map[y].length; x++) {
    if (map[y][x] === MapField.Player) {
      guard.x = x;
      guard.y = y;
    }
  }
}

// guard.moveToTheEndOfTheMap();
// console.log("the distinct route count ", guard.distinctVisitedFieldsCount);
guard.findLoopsCount();
console.log("loops count", distinctLoopObstaclePositions.size);
