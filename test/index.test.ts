import { readFileSync } from 'node:fs';
import { expect, test, describe } from 'vitest';
import { post, user, createFile } from '../src/index.ts';

function getRndIntIncl(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  return Math.floor(
    Math.random() * (Math.floor(max) - minCeiled + 1) + minCeiled
  );
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
  const rndPostCnt = getRndIntIncl(1, 50);
  test('Post.random()', async () => {
    expect((await post.random(rndPostCnt)).length).toBe(rndPostCnt);
  });
  test('Post.search()', async () => {
    expect((await post.search({ limit: rndPostCnt })).length).toBe(rndPostCnt);
  });

  const rndUserCnt = getRndIntIncl(1, 100);
  test('User.search()', async () => {
    expect((await user.search({ limit: rndUserCnt })).length).toBe(rndUserCnt);
  });
});

const buffer = Buffer.from(
  await createFile(
    'C:/Windows/Web/Screen/img100.jpg',
    'img.jpg',
    'image/jpeg'
  ).arrayBuffer()
);
test('Buffer check.', () => {
  expect(buffer.equals(readFileSync('C:/Windows/Web/Screen/img100.jpg'))).toBe(
    true
  );
});
