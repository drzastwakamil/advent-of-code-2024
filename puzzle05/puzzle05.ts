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

const result = 0;
console.log("the result ", result);
