type Character = "X" | "M" | "A" | "S";
export function countXMAS(input: string): number {
  const horizontal = input.split("\n").map((line) =>
    line.split("") as Array<Character>
  );

  const vertical = Array.from(
    { length: horizontal[0].length },
    (): Array<Character> => [],
  );

  for (const horizontalLine of horizontal) {
    for (const [index, character] of horizontalLine.entries()) {
      vertical[index].push(character);
    }
  }

  const diagonalLTR: Array<Array<Character>> = [];

  for (let index = 0; index < horizontal[0].length - 3; index++) {
    const diagonalLine: Array<Character> = [];
    for (
      let x = index,
        y = 0;
      x < horizontal[0].length && y < vertical.length;
      x++, y++
    ) {
      diagonalLine.push(horizontal[y][x]);
    }
    diagonalLTR.push(diagonalLine);
  }

  for (let index = 1; index < vertical[0].length - 3; index++) {
    const diagonalLine: Array<Character> = [];
    for (
      let x = 0,
        y = index;
      x < horizontal[0].length && y < vertical.length;
      x++, y++
    ) {
      diagonalLine.push(horizontal[y][x]);
    }
    diagonalLTR.push(diagonalLine);
  }

  const diagonalRTL: Array<Array<Character>> = [];
  for (let index = horizontal[0].length - 1; index > 2; index--) {
    const diagonalLine: Array<Character> = [];
    for (
      let x = index,
        y = 0;
      x >= 0 && y < vertical.length;
      x--, y++
    ) {
      diagonalLine.push(horizontal[y][x]);
    }
    diagonalRTL.push(diagonalLine);
  }

  for (let index = 1; index < vertical[0].length - 3; index++) {
    const diagonalLine: Array<Character> = [];
    for (
      let x = horizontal[0].length - 1,
        y = index;
      x >= 0 && y < vertical.length;
      x--, y++
    ) {
      diagonalLine.push(horizontal[y][x]);
    }
    diagonalRTL.push(diagonalLine);
  }

  let result = 0;
  for (const line of horizontal) {
    result += countInLineXMAS(line);
  }

  for (const line of vertical) {
    result += countInLineXMAS(line);
  }

  for (const line of diagonalLTR) {
    result += countInLineXMAS(line);
  }

  for (const line of diagonalRTL) {
    result += countInLineXMAS(line);
  }

  return result;
}

export function countInLineXMAS(line: Array<Character>) {
  let count = 0;
  let looksFor: "XMAS" | "SAMX" | undefined;
  let index = 0;

  for (const character of line) {
    if (looksFor) {
      if (character === looksFor[index]) {
        index += 1;
        if (index === 4) {
          count += 1;
          looksFor = looksFor === "SAMX" ? "XMAS" : "SAMX";
          index = 1;
        }
      } else {
        looksFor = undefined;
      }
    }

    if (!looksFor) {
      if (character === "X") {
        looksFor = "XMAS";
        index = 1;
      } else if (character === "S") {
        looksFor = "SAMX";
        index = 1;
      }
    }
  }

  return count;
}

const input = await Deno.readTextFile("./puzzle04/puzzle04_input.txt");
const result = countXMAS(input);
console.log("the result ", result);
