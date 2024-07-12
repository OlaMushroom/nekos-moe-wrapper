import { expect, test, describe } from 'bun:test';
import {
  getPost,
  getUser,
  random,
  searchPost,
  searchUser
} from '../src/index.ts';

const getRndInt = (max: number) => Math.floor(Math.random() * max + 1);

const arr = [getRndInt(50), getRndInt(100)];
console.log(arr);

describe('ID comparison.', () => {
  test('getPost()', async () =>
    expect((await getPost('ry7gPEpg7')).id).toBe('ry7gPEpg7'));
  test('getUser()', async () =>
    expect((await getUser('BkCBy21se')).id).toBe('BkCBy21se'));
});

describe('Length property comparison.', () => {
  test('searchPost()', async () =>
    expect((await searchPost({ limit: arr[0] })).length).toBe(arr[0]));
  test('searchUser()', async () =>
    expect((await searchUser({ limit: arr[1] })).length).toBe(arr[1]));
});

test('random()', async () =>
  expect((await random(arr[0])).length).toBe(arr[0]));
