import { expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { create } from '../index.ts';

const file = 'C:/Windows/Web/Screen/img100.jpg';

const buf = Buffer.from(
  await create(readFileSync(file), 'img', 'jpeg').arrayBuffer()
);

test('File is successfully created.', () =>
  expect(buf.equals(readFileSync(file))).toBe(true));
