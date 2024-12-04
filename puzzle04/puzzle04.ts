type Character = "X" | "M" | "A" | "S";
export function countXMAS(input: string): number {
  // we should have 4 arrays of characters??
  // we dont flip because when we interpret we look for either XMAS or SAMX

  // horizontal
  // vertical
  // diagonal LTR
  // diagonal RTL

  // lets start with horizontal

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
  let result = 0
  for (const line of horizontal) {
    result += countInLineXMAS(line)
  }

  for (const line of vertical) {
    result += countInLineXMAS(line)
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
          looksFor = looksFor === 'SAMX' ? 'XMAS' : 'SAMX'
          index = 1
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
