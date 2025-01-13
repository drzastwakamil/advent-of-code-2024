const input = await Deno.readTextFile(
  "./puzzle09-revisited/puzzle09_input.txt",
);

type FileBlock = {
  id: string;
  repeated: number;
};

type FreeSpaceBlock = {
  fileBlocks: Array<FileBlock>;
  dots: number;
};

type Block = FileBlock | FreeSpaceBlock;

export function inputToFileBlocks(input: string): Array<Block> {
  return input.split("").flatMap<Block>((value, index) => {
    if (value === "0") {
      return [];
    }

    const blockLength = Number(value);

    if (index % 2 === 0) {
      return {
        id: `${index * 0.5}`,
        repeated: blockLength,
      };
    }

    return {
      fileBlocks: [],
      dots: blockLength,
    };
  });
}

function shiftFileBlocks(_blocks: Array<Block>) {
  const blocks = [..._blocks];
  for (let index = blocks.length - 1; index >= 0; index--) {
    if ("id" in blocks[index]) {
      const fileBlock = blocks[index] as FileBlock;
      for (let x = 0; x < index; x++) {
        if ("dots" in blocks[x]) {
          const freeSpaceBlock = blocks[x] as FreeSpaceBlock;
          if (
            freeSpaceBlock.dots >= fileBlock.repeated * fileBlock.id.length
          ) {
            freeSpaceBlock.fileBlocks.push(fileBlock);
            freeSpaceBlock.dots -= fileBlock.repeated * fileBlock.id.length;

            blocks[index] = {
              id: "-1",
              repeated: fileBlock.repeated,
            };
            break;
          }
        }
      }
    }
  }
  return blocks;
}

function prepareForCalculation(_blocks: Array<Block>): Array<number | "."> {
  return _blocks.flatMap<number | ".">((block) => {
    if ("id" in block) {
      const fileBlock = block as FileBlock;
      if (fileBlock.id === "-1") {
        return Array(fileBlock.repeated).fill(".");
      }
      return Array<number>(fileBlock.repeated).fill(Number(fileBlock.id));
    } else if ("dots" in block) {
      const freeSpaceBlock = block as FreeSpaceBlock;

      return [
        freeSpaceBlock.fileBlocks.flatMap((fileBlock) =>
          Array<number>(fileBlock.repeated).fill(Number(fileBlock.id))
        ),
        Array(freeSpaceBlock.dots).fill("."),
      ].flatMap((block) => block);
    }

    return ".";
  });
}

function calculateCheckSum(_input: Array<number | ".">) {
  let result = 0;

  for (let index = 0; index < _input.length; index++) {
    const value = _input[index];
    if (value === ".") {
      continue;
    }
    console.log("value ", value, " * ", index, " = ", value * index);
    result += value * index;
  }
  return result;
}
const fileBlocks = inputToFileBlocks(input);

const shiftedFileBlocks = shiftFileBlocks(fileBlocks);

const preparedForCalcBlocks = prepareForCalculation(shiftedFileBlocks);
console.log("our result ", calculateCheckSum(preparedForCalcBlocks));
