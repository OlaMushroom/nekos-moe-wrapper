import { expect, test, describe, beforeAll } from 'vitest';
import {
  getPost,
  getUser,
  random,
  searchPost,
  searchUser
} from '../src/index.ts';

function getRndInt(max: number): number {
  return Math.floor(Math.random() * max + 1);
}

describe('ID comparison.', () => {
  test('getPost()', async () => {
    expect((await getPost('ry7gPEpg7')).id).toBe('ry7gPEpg7');
  });
  test('getUser()', async () => {
    expect((await getUser('BkCBy21se')).id).toBe('BkCBy21se');
  });
});

describe('Length property comparison.', () => {
  const arr: number[] = [];
  beforeAll(() => {
    arr[0] = getRndInt(50);
    arr[1] = getRndInt(100);
  });
  test('random()', async () => {
    const data = await random(arr[0]);
    expect(data.length).toBe(arr[0]);
  });
  test('searchPost()', async () => {
    const data = await searchPost({ limit: arr[0] });
    expect(data.length).toBe(arr[0]);
  });
  test('searchUser()', async () => {
    const data = await searchUser({ limit: arr[1] });
    expect(data.length).toBe(arr[1]);
  });
});
