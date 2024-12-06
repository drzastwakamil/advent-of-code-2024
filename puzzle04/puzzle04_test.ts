import { assertEquals } from "@std/assert";
import {
  countCrossMassesLOL,
  countInLineMAS,
  countInLineXMAS,
  countXMAS,
} from "./puzzle04.ts";

// Deno.test("countXMAS - test case 1", () => {
//   const result = countXMAS(
//     `MMMSXXMASM
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX`,
//   );
//   const expected = 18;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result} for input test puzzle input.`,
//   );
// });

// Deno.test("countXMAS - test case 2", () => {
//   const result = countXMAS(
//     `XMAS
// MMMM
// AAAA
// SSSS`,
//   );
//   const expected = 3;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${3} but got ${result} for input test puzzle input.`,
//   );
// });

// Deno.test("countXMAS - test case 3", () => {
//   const result = countXMAS(
//     `SAMX
// MMMM
// AAAA
// SSSS`,
//   );
//   const expected = 3;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result} for input test puzzle input.`,
//   );
// });

// Deno.test("countInLineXMAS - test case 1", () => {
//   const result = countInLineXMAS([
//     "M",
//     "M",
//     "M",
//     "S",
//     "X",
//     "X",
//     "M",
//     "A",
//     "S",
//     "M",
//   ]);
//   const expected = 1;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result} for input being correct here....XXMAS.`,
//   );
// });

// Deno.test("countInLineXMAS - test case 2", () => {
//   const result = countInLineXMAS([
//     "M",
//     "S",
//     "A",
//     "M",
//     "X",
//     "M",
//     "S",
//     "M",
//     "S",
//     "A",
//   ]);
//   const expected = 1;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result} for input being correct here .SAMXMS....`,
//   );
// });

// Deno.test("countInLineXMAS - test case 3", () => {
//   const result = countInLineXMAS([
//     "X",
//     "M",
//     "A",
//     "S",
//     "A",
//     "M",
//     "X",
//   ]);
//   const expected = 2;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result} for input being correct here XMASAMX`,
//   );
// });

// Deno.test("countInLineMAS - test case 1", () => {
//   const result = countInLineMAS([
//     { value: "M", x: 0, y: 0 },
//     { value: "X", x: 1, y: 0 },
//     { value: "M", x: 2, y: 0 },
//     { value: "A", x: 3, y: 0 },
//     { value: "S", x: 4, y: 0 },
//   ], "LTR");
//   const expected = 1;
//   assertEquals(
//     result.length,
//     expected,
//     `Expected ${expected} but got ${result} for input being correct here MXMAS`,
//   );
// });

// Deno.test("countInLineMAS - test case 2", () => {
//   const result = countInLineMAS([
//     { value: "M", x: 0, y: 0 },
//     { value: "X", x: 1, y: 0 },
//     { value: "M", x: 2, y: 0 },
//     { value: "A", x: 3, y: 0 },
//     { value: "S", x: 4, y: 0 },
//     { value: "A", x: 5, y: 0 },
//     { value: "M", x: 6, y: 0 },
//   ], "LTR");
//   const expected = 2;
//   assertEquals(
//     result.length,
//     expected,
//     `Expected ${expected} but got ${result} for input being correct here MXMAXSAM`,
//   );
// });

// // Deno.test("countCrossMassesLOL - test case 1", () => {
// //   const result = countCrossMassesLOL(`MMS
// // MAM
// // MMS`);
// //   const expected = 1;
// //   assertEquals(
// //     result,
// //     expected,
// //     `Expected ${expected} but got ${result}`,
// //   );
// // });

// Deno.test("countCrossMassesLOL - test case 2", () => {
//   const result = countCrossMassesLOL(`.M.S......
// ..A..MSMS.
// .M.S.MAA..
// ..A.ASMSM.
// .M.S.M....
// ..........
// S.S.S.S.S.
// .A.A.A.A..
// M.M.M.M.M.
// ..........`);
//   const expected = 9;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result}`,
//   );
// });

Deno.test("countCrossMassesLOL - test case 3", () => {
  const result = countCrossMassesLOL(`MMMMMMM
MMMMMMM
MMMMMMM
MMMMMMM
MMMMMMM
MMSMMMM
MAMMMMM
MMSMMMM
`);
  const expected = 1;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

// Deno.test("countCrossMassesLOL - test case 4", () => {
//   const result = countCrossMassesLOL(`MMMMMMM
// MMSMMMM
// MAMMMMM
// MMSMMMM
// MMMMMMM
// MMMMMMM
// MMMMMMM
// MMMMMMM
// `);
//   const expected = 1;
//   assertEquals(
//     result,
//     expected,
//     `Expected ${expected} but got ${result}`,
//   );
// });