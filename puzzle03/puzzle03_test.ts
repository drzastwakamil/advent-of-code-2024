import { assertEquals } from "@std/assert";
import { multiplicationSum } from "./puzzle03.ts";

Deno.test("multiplicationSum - test case 1", () => {
  const result = multiplicationSum(
    "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))",
  );
  const expected = 161;
  assertEquals(
    result,
    expected,
    `Expected ${expected} but got ${result} for input "7 6 4 2 1"`,
  );
});
