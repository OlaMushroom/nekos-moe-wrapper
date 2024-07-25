import { build } from 'esbuild';
import { dtsPlugin } from 'esbuild-plugin-d.ts';

await build({
  entryPoints: ['src/index.ts'],
  outdir: 'lib',
  bundle: true,
  minify: true,
  packages: 'external',
  platform: 'neutral',
  format: 'esm',
  target: ['es2022'],
  plugins: [
    dtsPlugin({
      experimentalBundling: true
    })
  ]
});
