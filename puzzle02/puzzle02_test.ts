import { assertEquals } from "@std/assert";
import { isReportLevelsSafe } from "./puzzle02.ts";

Deno.test(function isReportLevelsSafeTest() {
  assertEquals(isReportLevelsSafe("1 2 7 8 9"), false);
  assertEquals(isReportLevelsSafe("7 6 4 2 1"), true);
  assertEquals(isReportLevelsSafe("9 7 6 2 1"), false);
  assertEquals(isReportLevelsSafe("8 6 4 4 1"), false);
  assertEquals(isReportLevelsSafe("1 3 6 7 9"), true);
});
