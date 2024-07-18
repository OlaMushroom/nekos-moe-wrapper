import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';

export async function sendRequest(endpoint) {
  const url = new URL(endpoint, 'https://nekos.moe/');
  console.log(`URL: ${url.toString()}\nTimestamp: ${Date.now()}`);
  try {
    return await fetch(url);
  } catch (e) {
    throw Error('Error: ', { cause: e });
  }
}

export async function writeImage(name, res) {
  try {
    const file = `${name}.${res.headers.get('content-type')?.includes('image/png') ? 'png' : 'jpg'}`;
    console.log(`Writing file...: ${file}`);
    mkdirSync('./images', { recursive: true });
    writeFileSync(`./images/${file}`, new Uint8Array(await res.arrayBuffer()));
    console.log(`File written successfully: ${file}`);
  } catch (e) {
    throw Error('Error: ', { cause: e });
  }
}

export function removeDir(dir) {
  if (existsSync(dir)) {
    try {
      rmSync(dir, { recursive: true, force: true });
      return true;
    } catch (e) {
      throw Error('Error: ', { cause: e });
    }
  }
  return false;
}
