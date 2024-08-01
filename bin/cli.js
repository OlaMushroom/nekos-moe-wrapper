#!/usr/bin/env node
import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { cac } from 'cac'
import { getPost, getUser, random } from '../lib/index.js'
const dir = './images/'
async function sendRequest(endpoint) {
  const url = new URL(endpoint, 'https://nekos.moe/')
  console.log(`URL: ${url.toString()}\nTimestamp: ${Date.now()}`)
  try {
    return await fetch(url)
  } catch (e) {
    throw Error('Error: ', { cause: e })
  }
}
async function writeImage(name, res) {
  try {
    const file = `${name}.${res.headers.get('content-type')?.includes('image/png') ? 'png' : 'jpg'}`
    console.log(`Writing file...: ${file}`)
    mkdirSync(dir, { recursive: true })
    writeFileSync(`${dir}${file}`, new Uint8Array(await res.arrayBuffer()))
    console.log(`File written successfully: ${file}`)
  } catch (e) {
    throw Error('Error: ', { cause: e })
  }
}
const cli = cac('nekos')
cli.help()
cli.option('-c, --clean', 'Clean the cache directory')
cli
  .command('post <id>', 'Get a Post using ID')
  .alias('p')
  .option('-w, --write', 'Write image to disk')
  .action(async (id, options) => {
    const data = await getPost(id)
    console.log(data)
    if (options.write)
      writeImage(data.id, await sendRequest(`image/${data.id}`))
  })
cli
  .command('user <id>', 'Get a `User` using ID')
  .alias('u')
  .action(async id => {
    const data = await getUser(id)
    console.log(data)
    console.log(`URL: https://nekos.moe/user/${data.id}`)
  })
cli
  .command('random [count]', 'Get random Post(s)')
  .alias('r')
  .option('-w, --write', 'Write image to disk')
  .action(async (count, options) => {
    const data = await random(count)
    console.log(data)
    if (options.write) {
      for (const post of data)
        writeImage(post.id, await sendRequest(`image/${post.id}`))
    }
  })
cli.parse()
const opts = cli.options
if (opts.clean) {
  if (existsSync(dir)) {
    try {
      rmSync(dir, { recursive: true, force: true })
      console.log('Cleaned cache successfully.')
    } catch (e) {
      throw Error('Error: ', { cause: e })
    }
  } else console.log('No cache directory is found.')
}
