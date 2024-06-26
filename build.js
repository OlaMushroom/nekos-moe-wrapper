const defaultConfig = {
  entrypoints: ['./src/index.ts'],
  outdir: './build',
  target: 'node'
}
await Bun.build(defaultConfig);
await Bun.build({
  ...defaultConfig,
  minify: {
    whitespace: true,
    identifiers: false,
    syntax: false
  },
  naming: "[dir]/[name].min.[ext]"
});
