import { assertEquals } from "@std/assert";
import { countInLineXMAS, countXMAS } from "./puzzle04.ts";

// Deno.test("countXMAS - test case 1", () => {
//   const result = countXMAS(
//     `....XXMAS.
// .SAMXMS...
// ...S..A...
// ..A.A.MS.X
// XMASAMX.MM
// X.....XA.A
// S.S.S.S.SS
// .A.A.A.A.A
// ..M.M.M.MM
// .X.X.XMASX`,
//   );
//   const expected = 18;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${18} but got ${result} for input test puzzle input.`,
//   );
// });

Deno.test("countInLineXMAS - test case 1", () => {
  const result = countInLineXMAS([
    "M",
    "M",
    "M",
    "S",
    "X",
    "X",
    "M",
    "A",
    "S",
    "M",
  ]);
  const expected = 1;
  assertEquals(
    result,
    expected,
    `Expected ${1} but got ${result} for input being correct here....XXMAS.`,
  );
});

Deno.test("countInLineXMAS - test case 2", () => {
  const result = countInLineXMAS([
    "M",
    "S",
    "A",
    "M",
    "X",
    "M",
    "S",
    "M",
    "S",
    "A",
  ]);
  const expected = 1;
  assertEquals(
    result,
    expected,
    `Expected ${1} but got ${result} for input being correct here .SAMXMS....`,
  );
});


Deno.test("countInLineXMAS - test case 3", () => {
  const result = countInLineXMAS([
    'X', 'M','A', 'S', 'A', 'M', 'X'
  ]);
  const expected = 2;
  assertEquals(
    result,
    expected,
    `Expected ${1} but got ${result} for input being correct here XMASAMX`,
  );
});