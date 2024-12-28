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

const map = input.split("\n").map((line) => line.split("") as Array<MapField>);
const guard = {
  distinctVisitedFieldsCount: 1,
  x: -1,
  y: -1,
  forwardMovementDelta: {
    x: 0,
    y: -1,
  },
  facesDirection: Direction.Up,
  facesField() {
    return map[this.y + this.forwardMovementDelta.y][
      this.x + this.forwardMovementDelta.x
    ];
  },
  reachedEndOfMap() {
    return this.y === 0 || this.y === map.length - 1 ||
      this.x === 0 || this.x === map[0].length - 1;
  },
  moveForward() {
    map[this.y][this.x] = MapField.Visited;
    this.y += this.forwardMovementDelta.y;
    this.x += this.forwardMovementDelta.x;

    if (map[this.y][this.x] === MapField.Unvisited) {
      this.distinctVisitedFieldsCount += 1;
    }
    map[this.y][this.x] = MapField.Player;
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
      // printMap();
      // await sleep(10);

      if (this.facesField() === MapField.Obstacle) {
        this.turnRight();
        continue;
      }
      this.moveForward();
    }
  },
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

for (let y = 0; y < map.length; y++) {
  for (let x = 0; x < map[y].length; x++) {
    if (map[y][x] === MapField.Player) {
      guard.x = x;
      guard.y = y;
    }
  }
}

function printMap() {
  let output = "";
  for (let y = 0; y < map.length; y++) {
    let line = "";
    for (let x = 0; x < map[y].length; x++) {
      line += map[y][x];
    }
    output += line + "\n";
  }
  console.clear();
  console.log(output);
}

printMap();
guard.moveToTheEndOfTheMap();

console.log("the distinct route count ", guard.distinctVisitedFieldsCount);
