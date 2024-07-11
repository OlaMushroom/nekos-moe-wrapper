console.log(
  await Bun.build({
    entrypoints: ['./src/index.ts'],
    outdir: './src',
    format: 'esm',
    minify: true
  })
);
