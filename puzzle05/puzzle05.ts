export function checkIfPageNumbersMeetOrderRules(
  orderRules: Set<string>,
  pageNumbers: Array<string>,
) {
  for (const [index, pageNumber] of pageNumbers.entries()) {
    for (
      let nextNumberIndex = index + 1;
      nextNumberIndex < pageNumbers.length;
      nextNumberIndex++
    ) {
      const rule = `${pageNumber}|${pageNumbers[nextNumberIndex]}`;
      if (!orderRules.has(rule)) {
        return false;
      }
    }
  }

  return true;
}

export function correctPageNumberOrderToMeetRules(
  orderRules: Set<string>,
  pageNumbers: Array<string>,
) {
  for (let pageIndex = 0; pageIndex < pageNumbers.length; pageIndex++) {
    for (
      let nextNumberIndex = pageIndex + 1;
      nextNumberIndex < pageNumbers.length;
      nextNumberIndex++
    ) {
      const pageNumber = pageNumbers[pageIndex];
      const rule = `${pageNumber}|${pageNumbers[nextNumberIndex]}`;
      console.log("before ", pageNumbers.toString());
      if (!orderRules.has(rule)) {
        pageNumbers[pageIndex] = pageNumbers[nextNumberIndex];
        pageNumbers[nextNumberIndex] = pageNumber;
      }
      console.log("after ", pageNumbers.toString());
      console.log("\\n_________");
    }
  }

  return pageNumbers;
}

const input = await Deno.readTextFile("./puzzle05/puzzle05_input.txt");
const [rulesInput, pageNumbersInput] = input.split("\n\n");

const rules = new Set(rulesInput.split("\n"));
let result = 0;
let resultPart2 = 0;
for (const pageNumbersString of pageNumbersInput.split("\n")) {
  const pageNumbers = pageNumbersString.split(",");
  if (checkIfPageNumbersMeetOrderRules(rules, pageNumbers)) {
    const middlePageNumber = pageNumbers[Math.floor(pageNumbers.length / 2)];
    result += Number(middlePageNumber);
  } else {
    const correctedPageNumbers = correctPageNumberOrderToMeetRules(
      rules,
      pageNumbers,
    );

    const middlePageNumber =
      correctedPageNumbers[Math.floor(correctedPageNumbers.length / 2)];
    resultPart2 += Number(middlePageNumber);
  }
}
console.log("the result ", result);
console.log("the result part 2", resultPart2);
