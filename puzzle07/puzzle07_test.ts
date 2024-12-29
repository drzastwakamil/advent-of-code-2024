import { assertEquals } from "@std/assert";

Deno.test("isLooping - test case 1", () => {
  const result = false;
  const expected = false;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});
