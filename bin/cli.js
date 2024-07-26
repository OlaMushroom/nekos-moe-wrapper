#!/usr/bin/env node

import { cac } from 'cac';
import { getPost, getUser, random } from '../lib/index.js';
import { sendRequest, writeImage, removeDir } from './main.js';

const cli = cac('nekos');
cli.version('0.7.0');
cli.option('-c, --clean', 'Clean the cache directory');

cli
  .command('post <id>', 'Get a Post using ID')
  .alias('p')
  .option('-w, --write', 'Write image to disk')
  .action(async (id, options) => {
    const data = await getPost(id);
    console.log(data);
    if (options.write)
      writeImage(data.id, await sendRequest(`image/${data.id}`));
  });

cli
  .command('user <id>', 'Get a `User` using ID')
  .alias('u')
  .action(async (id) => {
    const data = await getUser(id);
    console.log(data);
    console.log(`URL: https://nekos.moe/user/${data.id}`);
  });

cli
  .command('random [count]', 'Get random Post(s)')
  .alias('r')
  .option('-w, --write', 'Write image to disk')
  .action(async (count, options) => {
    const data = await random(count);
    console.log(data);
    if (options.write) {
      for (const post of data)
        writeImage(post.id, await sendRequest(`image/${post.id}`));
    }
  });

cli.help();
cli.parse();

const opts = cli.options;
if (opts.clean) {
  if (removeDir('./images')) console.log('Cleaned cache successfully.');
  else console.log('No cache directory is found.');
}
