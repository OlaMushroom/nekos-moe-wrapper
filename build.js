await Bun.build({
  entrypoints: ['index.ts'],
  outdir: 'lib',
  format: 'esm',
  minify: true
});
