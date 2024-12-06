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

const input = await Deno.readTextFile("./puzzle05/puzzle05_input.txt");
const [rulesInput, pageNumbersInput] = input.split('\n\n')


const rules = new Set(rulesInput.split('\n'))
let result = 0;
for (const pageNumbersString of pageNumbersInput.split('\n')){
  const pageNumbers = pageNumbersString.split(',')
  if (checkIfPageNumbersMeetOrderRules(rules, pageNumbers)) {
    const middlePageNumber = pageNumbers[Math.floor(pageNumbers.length / 2)]
    result += Number(middlePageNumber)
  }
}
console.log("the result ", result);
