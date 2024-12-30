const input = await Deno.readTextFile("./puzzle09/puzzle09_input.txt");

export function inputToFileBlocks(input: string) {
  return input.split("").flatMap((value, index) => {
    const blockLength = Number(value);
    if (index % 2 === 0) {
      const representativeIndex = index * 0.5;
      return Array<string>(blockLength).fill(representativeIndex.toString());
    }
    return Array<string>(blockLength).fill(".");
  }).join("");
}

export function calculateCheckSumFrom(item: string) {
  let checkSum = 0;
  for (let index = 0; index < item.length; index++) {
    const character = item.at(index);
    if (character === ".") {
      continue;
    }

    const value = Number(character);
    checkSum += value * index;
  }
  return checkSum;
}

export function shiftFileBlocks(fileBlocks: string) {
  const blocks = fileBlocks.split("");
  let leftPointerX = 0;
  let rightPointerX = fileBlocks.length - 1;
  while (leftPointerX < rightPointerX) {
    while (fileBlocks[leftPointerX] !== ".") {
      leftPointerX += 1;
    }
    while (fileBlocks[rightPointerX] === ".") {
      rightPointerX -= 1;
    }

    [blocks[leftPointerX], blocks[rightPointerX]] = [
      blocks[rightPointerX],
      blocks[leftPointerX],
    ];
    leftPointerX += 1;
    rightPointerX -= 1;
  }
  return blocks.join("");
}

export function calculateInput(input: string) {
  const fileBlocks = inputToFileBlocks(input);
  const shiftedFileBlocks = shiftFileBlocks(fileBlocks);
  const result = calculateCheckSumFrom(shiftFileBlocks(shiftedFileBlocks));

  return result;
}

console.log("result ", calculateInput(input));
