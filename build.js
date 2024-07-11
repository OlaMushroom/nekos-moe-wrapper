#!/usr/bin/env bun

console.log(
  await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './js',
    format: 'esm',
    sourcemap: 'linked'
  })
);
