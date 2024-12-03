import { assertEquals } from "@std/assert";
import { isReportLevelsSafe } from "./puzzle02.ts";

Deno.test("isReportLevelsSafe - test case 1", () => {
  const result = isReportLevelsSafe("7 6 4 2 1");
  assertEquals(result, true, `Expected true but got ${result} for input "7 6 4 2 1"`);
});

Deno.test("isReportLevelsSafe - test case 2", () => {
  const result = isReportLevelsSafe("1 2 7 8 9");
  assertEquals(result, false, `Expected false but got ${result} for input "1 2 7 8 9"`);
});

Deno.test("isReportLevelsSafe - test case 3", () => {
  const result = isReportLevelsSafe("9 7 6 2 1");
  assertEquals(result, false, `Expected false but got ${result} for input "9 7 6 2 1"`);
});

Deno.test("isReportLevelsSafe - test case 4", () => {
  const result = isReportLevelsSafe("8 6 4 4 1");
  assertEquals(result, false, `Expected false but got ${result} for input "8 6 4 4 1"`);
});

Deno.test("isReportLevelsSafe - test case 5", () => {
  const result = isReportLevelsSafe("1 3 6 7 9");
  assertEquals(result, true, `Expected true but got ${result} for input "1 3 6 7 9"`);
});
