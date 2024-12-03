function differenceDoesNotMeetBaseCriteria(a: number, b: number) {
  const difference = Math.abs(a - b);
  if (difference < 1 || difference > 3) {
    return true;
  }
  return false;
}

function checkIfIncreases(a: number, b: number) {
  return a < b;
}

function checkIfDecreases(a: number, b: number) {
  return a > b;
}
export function isReportLevelsSafe(line: string): boolean {
  const [firstLevel, ...levels] = line.split(" ");

  const firstLevelValue = Number(firstLevel);
  const secondLevelValue = Number(levels[0]);
  if (differenceDoesNotMeetBaseCriteria(firstLevelValue, secondLevelValue)) {
    return false;
  }

  const meetsIncreaseOrDecreaseCriteria =
    checkIfIncreases(firstLevelValue, secondLevelValue)
      ? checkIfIncreases
      : checkIfDecreases;
  for (let levelIndex = 1; levelIndex < levels.length; levelIndex++) {
    const previousLevelValue = Number(levels[levelIndex - 1]);
    const levelValue = Number(levels[levelIndex]);

    if (differenceDoesNotMeetBaseCriteria(previousLevelValue, levelValue)) {
      return false;
    }
    if (meetsIncreaseOrDecreaseCriteria(previousLevelValue, levelValue)) {
      continue
    } else {
      return false
    }
  }

  return true;
}
const input = await Deno.readTextFile("./puzzle02/puzzle02_input.txt");

let answer = 0;
for (const line of input.split("\n")) {
  if (isReportLevelsSafe(line)) {
    answer += 1;
  }
}
console.log("THE ANSWER: ", answer);
