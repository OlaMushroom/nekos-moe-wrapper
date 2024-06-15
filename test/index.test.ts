import { expect, test, describe } from "vitest";
import { Post, User } from '../src/index.ts';

function getRndIntIncl(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minCeiled + 1) + minCeiled);
}

describe('Post.get()', () => {
  test("Image's IDs are the same.", async () => {
    expect((await Post.get("ry7gPEpg7")).id).toBe("ry7gPEpg7");
  })
});

const rndPostCnt = getRndIntIncl(1, 50);
describe('Post.search()', () => {
  test("Search counts are the same.", async () => {
    expect((await Post.search({ limit: rndPostCnt})).length).toBe(rndPostCnt);
  })
});

describe("User.get()", () => {
  test("User's IDs are the same.", async () => {
    expect((await User.get("BkCBy21se")).id).toBe("BkCBy21se");
  });
});

const rndUserCnt = getRndIntIncl(1, 100);
describe("User.search()", () => {
  test("User counts are the same.", async () => {
    expect((await User.search({ limit: rndUserCnt})).length).toBe(rndUserCnt);
  });
});