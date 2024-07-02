import { build } from 'esbuild';

const defaultConfig = {
  bundle: true,
  packages: 'external',
  platform: 'neutral',
  format: 'esm',
  target: ['es2022'],
  entryPoints: ['./src/index.ts'],
  outdir: 'build'
};

await build(defaultConfig);
await build({
  ...defaultConfig,
  minifyWhitespace: true,
  entryNames: '[dir]/[name].min'
});
