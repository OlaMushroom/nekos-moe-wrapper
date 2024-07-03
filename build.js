import { build } from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

const defaultConfig = {
  bundle: true,
  packages: 'external',
  platform: 'neutral',
  format: 'esm',
  target: ['es2022'],
  entryPoints: ['./src/index.ts'],
  outdir: './build'
};

await build(defaultConfig);
