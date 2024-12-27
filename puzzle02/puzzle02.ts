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
export function isReportLevelsSafe(line: string): [boolean, number] {
  const [firstLevel, ...levels] = line.split(" ");

  const firstLevelValue = Number(firstLevel);
  const secondLevelValue = Number(levels[0]);
  if (differenceDoesNotMeetBaseCriteria(firstLevelValue, secondLevelValue)) {
    return [false, 0];
  }

  const meetsIncreaseOrDecreaseCriteria =
    checkIfIncreases(firstLevelValue, secondLevelValue)
      ? checkIfIncreases
      : checkIfDecreases;
  for (let levelIndex = 1; levelIndex < levels.length; levelIndex++) {
    const previousLevelValue = Number(levels[levelIndex - 1]);
    const levelValue = Number(levels[levelIndex]);

    if (differenceDoesNotMeetBaseCriteria(previousLevelValue, levelValue)) {
      return [false, levelIndex];
    }
    if (meetsIncreaseOrDecreaseCriteria(previousLevelValue, levelValue)) {
      continue;
    } else {
      return [false, levelIndex];
    }
  }

  return [true, -1];
}
const input = await Deno.readTextFile("./puzzle02/puzzle02_input.txt");

let answer = 0;
let part2answer = 0;
for (const line of input.split("\n")) {
  const [isSafe, failedAtIndex] = isReportLevelsSafe(line);
  if (isSafe) {
    answer += 1;
    part2answer += 1;
    continue;
  } else {
    const lineAsArray = line.split(" ");
    const tolerableLevelCandidate = [...lineAsArray].toSpliced(failedAtIndex, 1)
      .join(" ");
    const [isSafe] = isReportLevelsSafe(tolerableLevelCandidate);
    if (isSafe) {
      part2answer += 1;
      continue;
    }

    if (failedAtIndex > 0) {
      const tolerableLevelCandidate = [...lineAsArray].toSpliced(
        failedAtIndex - 1,
        1,
      ).join(" ");
      const [isSafe] = isReportLevelsSafe(tolerableLevelCandidate);
      if (isSafe) {
        part2answer += 1;
        continue;
      }
    }

    if (failedAtIndex < lineAsArray.length - 1) {
      const tolerableLevelCandidate = [...lineAsArray].toSpliced(
        failedAtIndex + 1,
        1,
      ).join(" ");
      const [isSafe] = isReportLevelsSafe(tolerableLevelCandidate);
      if (isSafe) {
        part2answer += 1;
        continue;
      }
    }
  }
}
console.log("THE ANSWER: ", answer);
console.log("THE ANSWER PART 2: ", part2answer);
