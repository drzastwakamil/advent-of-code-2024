const input = await Deno.readTextFile("./puzzle09/puzzle09_input.txt");

export function inputToFileBlocks(input: string) {
  return input.split("").map((value, index) => {
    const blockLength = Number(value);

    if (index % 2 === 0) {
      const representativeIndex = index * 0.5;
      return Array<string>(blockLength).fill(representativeIndex.toString())
        .join("");
    }

    return Array<string>(blockLength).fill(".").join("");
  }).filter((string) => string.length > 0).join("");
}

export function calculateCheckSumFrom(item: string) {
  let checkSum = 0;
  for (let index = 0; index < item.length; index++) {
    const character = item.at(index);
    const value = Number(character);
    // console.log(character + " * " + index + " = " + value * index);
    checkSum = checkSum + (value * index);
  }
  return checkSum;
}

export function shiftFileBlocks(fileBlocks: string) {
  const amountOfDots =
    fileBlocks.split("").filter((character) => character === ".").length;

  const splittingPoint = fileBlocks.length - amountOfDots;
  const leftChars = fileBlocks.substring(0, splittingPoint).split("");
  const rightChars = fileBlocks.substring(splittingPoint).split("").filter(
    (character) => character !== ".",
  );

  for (
    let leftCharIndex = 0;
    leftCharIndex < leftChars.length;
    leftCharIndex++
  ) {
    if (leftChars[leftCharIndex] === ".") {
      leftChars[leftCharIndex] = rightChars.pop() || "";
    }
  }

  return leftChars.join("");
}

export function calculateInput(input: string) {
  const fileBlocks = inputToFileBlocks(input);

  Deno.writeTextFile("./puzzle09/fileBlocks.txt", fileBlocks);
  const shiftedFileBlocks = shiftFileBlocks(fileBlocks);
  Deno.writeTextFile("./puzzle09/shiftedFileBlocks.txt", shiftedFileBlocks);

  return calculateCheckSumFrom(shiftedFileBlocks);
}

console.log(
  "the result ",
  calculateInput(input),
);
