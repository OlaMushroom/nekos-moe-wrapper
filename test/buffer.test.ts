import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';
import { createFile } from '../src/index.ts';

const filePath = 'C:/Windows/Web/Screen/img100.jpg';
test('Buffer check.', async () => {
  const buffer = Buffer.from(
    await createFile(filePath, 'i.jpg', 'image/jpeg').arrayBuffer()
  );
  expect(buffer.equals(readFileSync(filePath))).toBe(true);
});
