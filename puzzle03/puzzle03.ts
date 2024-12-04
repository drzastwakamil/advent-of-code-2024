const oneTo9 = "123456789";
const zeroToNine = "0" + oneTo9;

function getFirstMax3DigitNumber(from: string, endingCharacter: string) {
  const firstCharacter = from.charAt(0);
  if (!oneTo9.includes(firstCharacter)) {
    return false;
  }

  const secondCharacter = from.charAt(1);
  if (secondCharacter === endingCharacter) {
    return firstCharacter;
  }

  if (!zeroToNine.includes(secondCharacter)) {
    return false;
  }

  const thirdCharacter = from.charAt(2);
  if (thirdCharacter === endingCharacter) {
    return firstCharacter + secondCharacter;
  }

  if (!zeroToNine.includes(thirdCharacter)) {
    return false;
  }

  const fourthCharacter = from.charAt(3);
  if (fourthCharacter !== endingCharacter) {
    return false;
  }

  return firstCharacter + secondCharacter + thirdCharacter;
}

export function multiplicationSum(input: string): number {
  let result = 0;
  let prevMulIndex = -3;
  do {
    const indexOfMul = input.indexOf("mul(", prevMulIndex + 3);

    if (indexOfMul > -1) {
      const firstNumberStartsHere = indexOfMul + 4;
      const possibleCorrectInput = input.substring(
        firstNumberStartsHere,
        firstNumberStartsHere + 8,
      );

      const firstNumber = getFirstMax3DigitNumber(possibleCorrectInput, ",");
      if (!firstNumber) {
        prevMulIndex = indexOfMul;
        continue;
      }

      const secondNumberStartsHere = firstNumber.length + 1;
      const possibleCorrectSecondNumberInput = possibleCorrectInput.substring(
        secondNumberStartsHere,
        secondNumberStartsHere + 10,
      );
      const secondNumber = getFirstMax3DigitNumber(
        possibleCorrectSecondNumberInput,
        ")",
      );

      if (secondNumber) {
        result += Number(firstNumber) * Number(secondNumber);
      }
    }

    prevMulIndex = indexOfMul;
  } while (prevMulIndex !== -1);

  return result;
}

const input = await Deno.readTextFile("./puzzle03/puzzle03_input.txt");
const result = multiplicationSum(input);
console.log(" the result ", result);
