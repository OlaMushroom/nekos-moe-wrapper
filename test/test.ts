import { writeFileSync } from "node:fs";
import * as nekos from "../src/index";
import * as buffer from "../src/buffer.ts";

//console.log(await nekos.Post.random());
//console.log(await nekos.Post.search({limit: 1}));
//console.log(await nekos.User.search({limit: 1}));

/*
const imageFile = buffer.createFile(
  "C:/Users/a/github/nekos-moe.js/test/input/test.jpeg",
  "jpegimage",
  "image/jpeg"
);
writeFileSync(
  "./test/output/testoutput.jpg",
  new Uint8Array(await buffer.fromFiletoArrayBuffer(imageFile))
);
*/

/*
const file = new File(["foo n bar"], "foobar.txt", { type: "text/plain" });
const arrayBuffer = await buffer.fromFiletoArrayBuffer(file);
const decoder = new TextDecoder("utf-8");
console.log(decoder.decode(new Uint8Array(arrayBuffer))); // "foo n bar"
*/
