import { expect, test, describe } from 'bun:test';
import {
  getPost,
  getUser,
  random,
  searchPost,
  searchUser
} from '../src/index.ts';

const getRndInt = (max: number) => Math.floor(Math.random() * max + 1);
const cnt = [getRndInt(50), getRndInt(100)];
console.log(`Post count: ${cnt[0]}\nUser count: ${cnt[1]}`);

describe('ID comparison.', () => {
  test('getPost()', async () =>
    expect((await getPost('ry7gPEpg7')).id).toBe('ry7gPEpg7'));
  test('getUser()', async () =>
    expect((await getUser('BkCBy21se')).id).toBe('BkCBy21se'));
});

describe('Length property comparison.', () => {
  test('searchPost()', async () =>
    expect((await searchPost({ limit: cnt[0] })).length).toBe(cnt[0]));
  test('searchUser()', async () =>
    expect((await searchUser({ limit: cnt[1] })).length).toBe(cnt[1]));
});

test('random()', async () =>
  expect((await random(cnt[0])).length).toBe(cnt[0]));
