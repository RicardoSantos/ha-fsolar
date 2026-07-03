import * as esbuild from 'esbuild';

const watch = process.argv.includes('--watch');
const minify = process.argv.includes('--minify');

const ctx = await esbuild.context({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/felicity-battery-cards.js',
  format: 'esm',
  minify,
  sourcemap: !minify,
  target: ['es2020'],
  logLevel: 'info',
  define: {
    'process.env.NODE_ENV': minify ? '"production"' : '"development"',
  },
});

if (watch) {
  await ctx.watch();
  console.log('Watching for changes...');
} else {
  await ctx.rebuild();
  await ctx.dispose();
}
