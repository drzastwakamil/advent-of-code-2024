import { assertEquals } from "@std/assert";
import { checkIfPageNumbersMeetOrderRules } from "./puzzle05.ts";

const rules = new Set([
  "47|53",
  "97|13",
  "97|61",
  "97|47",
  "75|29",
  "61|13",
  "75|53",
  "29|13",
  "97|29",
  "53|29",
  "61|53",
  "97|53",
  "61|29",
  "47|13",
  "75|47",
  "97|75",
  "47|61",
  "75|61",
  "47|29",
  "75|13",
  "53|13",
]);

Deno.test("checkIfPageNumbersMeetOrderRules - test case 1", () => {
  const result = checkIfPageNumbersMeetOrderRules(rules, [
    "75",
    "47",
    "61",
    "53",
    "29",
  ]);
  const expected = true;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("checkIfPageNumbersMeetOrderRules - test case 2", () => {
  const result = checkIfPageNumbersMeetOrderRules(rules, [
    "97",
    "61",
    "53",
    "29",
    "13",
  ]);
  const expected = true;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("checkIfPageNumbersMeetOrderRules - test case 3", () => {
  const result = checkIfPageNumbersMeetOrderRules(rules, [
    "75",
    "29",
    "13",
  ]);
  const expected = true;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("checkIfPageNumbersMeetOrderRules - test case 4", () => {
  const result = checkIfPageNumbersMeetOrderRules(rules, [
    "75",
    "97",
    "47",
    "61",
    "53",
  ]);
  const expected = false;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});

Deno.test("checkIfPageNumbersMeetOrderRules - test case 5", () => {
  const result = checkIfPageNumbersMeetOrderRules(rules, [
    "61",
    "13",
    "29",
  ]);
  const expected = false;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});
Deno.test("checkIfPageNumbersMeetOrderRules - test case 6", () => {
  const result = checkIfPageNumbersMeetOrderRules(rules, [
    "97",
    "13",
    "75",
    "29",
    "47",
  ]);
  const expected = false;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input test puzzle input.`,
  );
});
