import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';
import { create } from '../src/index.ts';

const file = 'C:/Windows/Web/Screen/img100.jpg';
const buf = Buffer.from(
  await create(readFileSync(file), 'img', 'jpeg').arrayBuffer()
);
test('File is successfully created.', async () => {
  expect(buf.equals(readFileSync(file))).toBe(true);
});
