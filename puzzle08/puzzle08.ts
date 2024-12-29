const input = await Deno.readTextFile("./puzzle08/puzzle08_input.txt");

const grid = input.split("\n").map((line) => line.split(""));
const antennas = new Map<string, Array<{ x: number; y: number }>>();

for (let y = 0; y < grid.length; y++) {
  for (let x = 0; x < grid[0].length; x++) {
    const mapField = grid[y][x];
    if (mapField !== ".") {
      if (!antennas.get(mapField)) {
        antennas.set(mapField, []);
      }
      const antennasPositions = antennas.get(mapField) || [];
      antennasPositions.push({
        x,
        y,
      });
    }
  }
}

const antiNodes = new Set<string>();
antennas.keys().forEach((frequency) => {
  console.log("antennas key frequency", frequency);
  for (let index = 0; index < (antennas.get(frequency) || []).length; index++) {
    const antennasOnFrequency = [...(antennas.get(frequency) || [])];
    const antenna = antennasOnFrequency.splice(index, 1)[0];
    console.log("antennas on freq", antennasOnFrequency);
    console.log("antenna", antenna);
    console.log("antennas to pair with", antennasOnFrequency);
    console.log("\n");

    for (const antennaToPairWith of antennasOnFrequency) {
      const deltaX = antenna.x - antennaToPairWith.x;
      const deltaY = antenna.y - antennaToPairWith.y;

      const antinodeX = antenna.x + deltaX;
      const antinodeY = antenna.y + deltaY;

      const antinodeHash = `${antinodeX}|${antinodeY}`;
      if (
        !antiNodes.has(antinodeHash) &&
        antinodeX >= 0 && antinodeX < grid[0].length && antinodeY >= 0 &&
        antinodeY < grid.length
      ) {
        antiNodes.add(antinodeHash);
      }
    }
  }
});

console.log("distinct antinodes ", antiNodes.size);
