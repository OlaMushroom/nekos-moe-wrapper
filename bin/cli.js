#!/usr/bin/env node

import { Command } from 'commander';
import { getPost, getUser, random } from '../src/index.js';
import { sendRequest, writeImage } from './main.js';

const program = new Command('nekos');

program
  .command('post')
  .description('Get a `Post` using ID.')
  .alias('p')
  .argument('<id>')
  .option('-w --write', 'Write image to disk.')
  .action(async (id, options) => {
    const data = await getPost(id);
    console.log(data);
    if (options.write) writeImage(id, await sendRequest(`image/${id}`));
  });

program
  .command('user')
  .alias('u')
  .argument('<id>')
  .description('Get a `User` using ID. ')
  .action(async (id) => {
    data = await getUser(id);
    console.log(data);
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
