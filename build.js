console.log(
  await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './lib',
    format: 'esm',
    minify: true
  })
);
