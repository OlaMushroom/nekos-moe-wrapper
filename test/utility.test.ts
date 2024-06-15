import { describe, test, expect } from "vitest";
//"bun:test"
//"@jest/globals";
import { readFileSync } from "node:fs";
import { Utility } from "../src/utility.ts";

const imageBuffer = readFileSync("C:/Windows/Web/Screen/img100.jpg");

describe(`
  fromBuffertoArrayBuffer()\n
  fromArrayBuffertoBuffer()\n
  `, () => {
  test("2 buffers are equal.", () => {
    expect(
      Utility.fromArrayBufferToBuffer(
        Utility.fromBufferToArrayBuffer(imageBuffer)
      ).equals(imageBuffer)
    ).toBe(true);
  });
});
