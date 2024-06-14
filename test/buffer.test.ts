import { describe, test, expect } from "@jest/globals";
import { readFileSync } from "node:fs";
import {
  fromArrayBuffertoBuffer,
  fromBuffertoArrayBuffer,
} from "../src/buffer.ts";

const imageBuffer = readFileSync("C:/Windows/Web/Screen/img100.jpg");
const newBuffer = fromArrayBuffertoBuffer(fromBuffertoArrayBuffer(imageBuffer));

describe(`
  fromBuffertoArrayBuffer()\n
  fromArrayBuffertoBuffer()\n
  `, () => {
  test("2 buffers are equal.", () => {
    expect(imageBuffer.equals(newBuffer)).toBe(true);
  });
});
