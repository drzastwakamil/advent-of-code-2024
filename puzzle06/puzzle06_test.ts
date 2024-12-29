import { assertEquals } from "@std/assert";
import { isLooping } from "./puzzle06.ts";

Deno.test("isLooping - test case 1", () => {
  const result = isLooping(["1"]);
  const expected = false;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("isLooping - test case 2", () => {
  const result = isLooping(["1", "1", "1", "1", "1", "1", "1", "1"]);
  const expected = true;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("isLooping - test case 3", () => {
  const result = isLooping([
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "rest of the path",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
  ]);
  const expected = true;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("isLooping - test case 3", () => {
  const result = isLooping([
    "a",
    "b",
    "c",
    "a",
    "b",
    "c",
  ]);
  const expected = false;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("isLooping - test case 3", () => {
  const result = isLooping([
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
    "a",
    "b",
    "c",
    "d",
  ]);
  const expected = true;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});
