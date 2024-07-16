import {
  createWriteStream,
  mkdirSync,
  readdirSync,
  readFileSync
} from 'node:fs';
import { basename, extname, join } from 'node:path';
import archiver from 'archiver';

const dir = join(__dirname, '..', 'dist');
const dirZip = join(dir, 'release');
const files = readdirSync(dir, { withFileTypes: true })
  .filter((item) => !item.isDirectory())
  .map((item) => item.name);
mkdirSync(dirZip, { recursive: true });
for (const file of files) {
  const type = extname(file);
  const name = basename(file, type);
  const zip = `${join(dirZip, name)}.zip`;
  const output = createWriteStream(zip);
  output.on('close', () => {
    console.log(`${zip}: ${archive.pointer()} bytes.`);
    console.log(
      'archiver has been finalized and the output file descriptor has closed.'
    );
  });
  const archive = archiver('zip', {
    zlib: { level: 7 }
  });
  archive.on('error', (e) => {
    throw e;
  });
  archive.on('warning', (e) => {
    if (e.code === 'ENOENT') {
      console.log('Warning: No entry!');
    } else {
      throw e;
    }
  });
  const path = join(dir, file);
  console.log(`Compressing: ${path}`);
  archive.pipe(output);
  archive.append(readFileSync(path), { name: `nekos${type}` });
  archive.finalize();
}
