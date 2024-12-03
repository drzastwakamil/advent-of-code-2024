const input = await Deno.readTextFile("./puzzle01/puzzle01_input.txt");

const listA = Array<number>();
const listB = Array<number>();
const LENGTH_OF_ID = 4;
const SPACES_BETWEEN_IDS = 3;
for (const line of input.split("\n")) {
  const itemA = Number(line.substring(0, LENGTH_OF_ID + 1));
  const itemB = Number(line.substring(LENGTH_OF_ID + SPACES_BETWEEN_IDS + 1));
  listA.push(itemA);
  listB.push(itemB);
}

listA.sort();
listB.sort();

let answer = 0;
for (let index = 0; index < listA.length; index++) {
  answer += Math.abs(listA[index] - listB[index]);
}

console.log("THE ANSWER IS: ", answer);
