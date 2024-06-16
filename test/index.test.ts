import { expect, test, describe } from "vitest";
import { Post, User } from '../src/index.ts';

function getRndIntIncl(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minCeiled + 1) + minCeiled);
}

const rndPostCnt = getRndIntIncl(1, 50);
const rndUserCnt = getRndIntIncl(1, 100);

describe('Post.get()', () => {
  test("Post's IDs are the same.", async () => {
    expect((await Post.get("ry7gPEpg7")).id).toBe("ry7gPEpg7");
  })
});

describe('Post.random()', () => {
  test("Post counts are the same.", async () => {
    expect((await Post.random(rndPostCnt)).length).toBe(rndPostCnt);
  })
});

describe('Post.search()', () => {
  test("Post counts are the same.", async () => {
    expect((await Post.search({ limit: rndPostCnt})).length).toBe(rndPostCnt);
  })
});

describe("User.get()", () => {
  test("User's IDs are the same.", async () => {
    expect((await User.get("BkCBy21se")).id).toBe("BkCBy21se");
  });
});

describe("User.search()", () => {
  test("User counts are the same.", async () => {
    expect((await User.search({ limit: rndUserCnt})).length).toBe(rndUserCnt);
  });
});