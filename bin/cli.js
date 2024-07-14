#!/usr/bin/env node

import { Command } from 'commander';
import { getPost, getUser, random } from '../lib/index.js';
import { sendRequest, writeImage } from './main.js';

const program = new Command('nekos');
program.version('0.6.3');

program
  .command('post')
  .description('Get a `Post` using ID.')
  .alias('p')
  .argument('<id>')
  .option('-w --write', 'Write image to disk.')
  .action(async (id, options) => {
    const data = await getPost(id);
    console.log(data);
    if (options.write)
      writeImage(data.id, await sendRequest(`image/${data.id}`));
  });

program
  .command('user')
  .description('Get a `User` using ID. ')
  .alias('u')
  .argument('<id>')
  .action(async (id) => {
    const data = await getUser(id);
    console.log(data);
    console.log(`URL: https://nekos.moe/user/${data.id}`);
  });

program
  .command('random')
  .description('Get random `Post`(s).')
  .alias('r')
  .argument('[count]')
  .option('-w --write', 'Write image to disk.')
  .action(async (count, options) => {
    const data = await random(count);
    console.log(data);
    if (options.write) {
      for (const post of data)
        writeImage(post.id, await sendRequest(`image/${post.id}`));
    }
  });

program.parse();
