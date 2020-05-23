import {
  compile,
  execute,
  getCompiler,
  normalizeErrors,
  readAsset,
} from './helpers';

describe('"raw" option', () => {
  it('should work without value', async () => {
    const compiler = getCompiler('simple.js');
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "Boolean" value equal "true"', async () => {
    const compiler = getCompiler('simple.js', {
      raw: true,
    });
    const stats = await compile(compiler);

    expect(
      Buffer.from(
        execute(readAsset('main.bundle.js', compiler, stats))
      ).toString('utf-8')
    ).toMatchSnapshot('result');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });
  it('should work with "Boolean" value equal "false"', async () => {
    const compiler = getCompiler('simple.js', {
      raw: false,
    });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });
});
