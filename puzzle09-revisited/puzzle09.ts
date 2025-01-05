const input = await Deno.readTextFile(
  "./puzzle09-revisited/puzzle09_input.txt",
);

type Block = number | ".";

export function inputToFileBlocks(input: string): Array<Block> {
  return input.split("").flatMap((value, index) => {
    if (value === "0") {
      return [];
    }

    const blockLength = Number(value);

    if (index % 2 === 0) {
      const representativeIndex = index * 0.5;
      return Array(blockLength).fill(representativeIndex);
    }

    return Array<".">(blockLength).fill(".");
  });
}

export function calculateCheckSumFrom(item: Array<Block>) {
  let checkSum = 0;
  for (let index = 0; index < item.length; index++) {
    const character = item.at(index);
    if (character !== ".") {
      const value = Number(character);
      checkSum = checkSum + (value * index);
    }
  }
  return checkSum;
}

export function shiftFileBlocks(fileBlocks: Array<Block>) {
  const amountOfDots = fileBlocks.filter((block) => block === ".").length;

  const splittingPoint = fileBlocks.length - amountOfDots;
  const leftChars = fileBlocks.slice(0, splittingPoint);
  const rightChars = fileBlocks.slice(splittingPoint).filter(
    (character) => character !== ".",
  );

  for (
    let leftCharIndex = 0;
    leftCharIndex < leftChars.length;
    leftCharIndex++
  ) {
    if (leftChars[leftCharIndex] === ".") {
      leftChars[leftCharIndex] = rightChars.pop() || ".";
    }
  }

  return leftChars;
}

export function calculateInput(input: string) {
  const fileBlocks = inputToFileBlocks(input);
  const shiftedFileBlocks = shiftFileBlocks(fileBlocks);

  return calculateCheckSumFrom(shiftedFileBlocks);
}

console.log(
  "the result ",
  calculateInput(input),
);
