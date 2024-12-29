const input = await Deno.readTextFile("./puzzle07/puzzle07_input.txt");

let answer = 0;
input.split("\n").forEach((line) => {
  const [testValueString, numbersString] = line.split(": ");

  const testValue = Number(testValueString);
  const numbers = numbersString.split(" ").map((numberString) =>
    Number(numberString)
  );

  if (canCreateValueFromNumbers(testValue, numbers)) {
    answer += testValue;
  }
});

console.log("the answer ", answer);
function canCreateValueFromNumbers(value: number, numbers: Array<number>) {
  const firstNumber = numbers.shift();
  if (!firstNumber) {
    return false;
  }
  let result: Array<number> = [firstNumber];

  for (const nextNumber of numbers) {
    result = result.flatMap((possibleResult) => {
      const multiplied = possibleResult + nextNumber;
      const added = possibleResult * nextNumber;
      const concatenated = Number(`${possibleResult}${nextNumber}`);

      return [
        ...(multiplied <= value ? [multiplied] : []),
        ...(added <= value ? [added] : []),
        ...(concatenated <= value ? [concatenated] : []),
      ];
    });
  }

  return result.includes(value);
}
