import { mkdir, writeFileSync } from 'node:fs';

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
  mkdir('./images', { recursive: true }, (e) => {
    if (e) throw e;
  });
  const file = `${name}.${res.headers.get('content-type')?.includes('image/png') ? 'png' : 'jpg'}`;
  writeFileSync(`./images/${file}`, new Uint8Array(await res.arrayBuffer()));
  console.log(`File written successfully: ${file}`);
}
