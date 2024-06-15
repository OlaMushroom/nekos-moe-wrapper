import { expect, test, describe } from "vitest";
import { Post, User } from '../src/index.ts';

function getRandomIntInclusive(min: number, max: number) {
  const minCeiled = Math.ceil(min);
  return Math.floor(Math.random() * (Math.floor(max) - minCeiled + 1) + minCeiled);
}

// Test: Post.get() method
describe('Post.get()', () => {
  test("Image's IDs are the same.", async () => {
    expect((await Post.get("ry7gPEpg7")).id).toBe("ry7gPEpg7");
  })
});

//Test: User.get() method
describe("User.get()", () => {
  test("User's IDs are the same.", async () => {
    expect((await User.get("BkCBy21se")).id).toBe("BkCBy21se");
  });
});