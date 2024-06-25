import { readFileSync } from 'node:fs';
import { expect, test, describe, beforeAll } from 'vitest';
import { post, user, createFile } from '../src/index.ts';

function getRndInt(max: number): number {
  return Math.floor(Math.random() * max + 1);
}

describe('ID check.', () => {
  test("Post's IDs are the same.", async () => {
    expect((await post.get('ry7gPEpg7')).id).toBe('ry7gPEpg7');
  });
  test("User's IDs are the same.", async () => {
    expect((await user.get('BkCBy21se')).id).toBe('BkCBy21se');
  });
});

describe('Length property check.', () => {
  const arr: number[] = [];
  beforeAll(() => {
    arr[0] = getRndInt(50);
    arr[1] = getRndInt(100);
  });

  test('Post.random()', async () => {
    const data = await post.random(arr[0]);
    expect(data.length).toBe(arr[0]);
  });
  test('Post.search()', async () => {
    const data = await post.search({ limit: arr[0] })
    expect(data.length).toBe(arr[0]);
  });
  test('User.search()', async () => {
    const data = await user.search({ limit: arr[1] })
    expect(data.length).toBe(arr[1]);
  });
});

test('Buffer check.', async () => {
  const buffer = Buffer.from(
    await createFile(
      'C:/Windows/Web/Screen/img100.jpg',
      'img.jpg',
      'image/jpeg'
    ).arrayBuffer()
  );
  expect(buffer.equals(readFileSync('C:/Windows/Web/Screen/img100.jpg'))).toBe(
    true
  );
});
