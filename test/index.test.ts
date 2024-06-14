import { describe, test, expect } from "@jest/globals";
import { Post, User } from '../src/index.ts';

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