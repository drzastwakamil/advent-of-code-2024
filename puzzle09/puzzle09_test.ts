import { assertEquals } from "@std/assert";
import {
  calculateCheckSumFrom,
  calculateInput,
  inputToFileBlocks,
  shiftFileBlocks,
} from "./puzzle09.ts";

Deno.test("calculateCheckSumFrom - test case 1", () => {
  const result = calculateCheckSumFrom(
    "01.3.5......",
  );
  const expected = 35;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("calculateCheckSumFrom - test case 2", () => {
  const result = calculateCheckSumFrom(
    "0099811188827773336446555566..............",
  );
  const expected = 1928;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("inputToFileBlocks - test case 1", () => {
  const result = inputToFileBlocks(
    "12345",
  );
  const expected = "0..111....22222";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});
Deno.test("inputToFileBlocks - test case 2", () => {
  const result = inputToFileBlocks(
    "2333133121414131402",
  );
  const expected = "00...111...2...333.44.5555.6666.777.888899";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("shiftFileBlocks - test case 1", () => {
  const result = shiftFileBlocks(
    "0..111....22222",
  );
  const expected = "022111222......";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("shiftFileBlocks - test case 1", () => {
  const result = shiftFileBlocks(
    "00...111...2...333.44.5555.6666.777.888899",
  );
  const expected = "0099811188827773336446555566..............";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("calculateInput - test case 1", () => {
  const result = calculateInput(
    "2333133121414131402",
  );
  const expected = 1928;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});
