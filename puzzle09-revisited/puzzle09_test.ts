import { assertEquals } from "@std/assert";
import {
  calculateCheckSumFrom,
  calculateInput,
  inputToFileBlocks,
  shiftFileBlocks,
} from "./puzzle09.ts";

Deno.test("calculateCheckSumFrom - test case 1", () => {
  const result = calculateCheckSumFrom(
    "0099811188827773336446555566",
  );
  const expected = 1928;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("calculateCheckSumFrom - test case 2", () => {
  const result = calculateCheckSumFrom(
    "9999999999999999",
  );
  const expected = 1080;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("inputToFileBlocks - test case 1", () => {
  const input = "12345";
  const result = inputToFileBlocks(
    input,
  );
  const expected = "0..111....22222";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});
Deno.test("inputToFileBlocks - test case 2", () => {
  const input = "2333133121414131402";

  const result = inputToFileBlocks(
    input,
  );
  const expected = "00...111...2...333.44.5555.6666.777.888899";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("inputToFileBlocks - test case 3", () => {
  const input = "11111111111111111111112";
  const result = inputToFileBlocks(
    input,
  );
  const expected = "0.1.2.3.4.5.6.7.8.9.10.1111";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("inputToFileBlocks - test case 4", () => {
  const input = "1111111111111111111111233";
  const result = inputToFileBlocks(
    input,
  );
  const expected = "0.1.2.3.4.5.6.7.8.9.10.1111...121212";
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
  const expected = "022111222";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("shiftFileBlocks - test case 2", () => {
  const result = shiftFileBlocks(
    "00...111...2...333.44.5555.6666.777.888899",
  );
  const expected = "0099811188827773336446555566";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("shiftFileBlocks - test case 3", () => {
  const result = shiftFileBlocks(
    "0.1.2.3.4.5.6.7.8.9",
  );
  const expected = "0918273645";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("shiftFileBlocks - test case 4", () => {
  const result = shiftFileBlocks(
    "0.1.2.3.4.5.6.7.8.9.10.1111",
  );
  const expected = "0111213140516978";
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result}`,
  );
});

Deno.test("shiftFileBlocks - test case 5", () => {
  const result = shiftFileBlocks(
    "13123123.123123123",
  );
  const expected = "13123123312312312";
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
