import crypto from 'crypto';

import {
  compile,
  execute,
  getCompiler,
  normalizeErrors,
  readAsset,
} from './helpers';

describe('loader', () => {
  it('should work', async () => {
    const compiler = getCompiler('simple.js');
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should not work with PDF without raw option', async () => {
    const compiler = getCompiler('pdf.js');
    const stats = await compile(compiler);

    expect(
      crypto
        .createHash('md5')
        .update(execute(readAsset('main.bundle.js', compiler, stats)))
        .digest('hex')
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with PDF with raw option', async () => {
    const compiler = getCompiler('pdf.js', { raw: true });
    const stats = await compile(compiler);

    expect(
      crypto
        .createHash('md5')
        .update(
          Buffer.from(execute(readAsset('main.bundle.js', compiler, stats)))
        )
        .digest('hex')
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should not work with cp1251 without raw option', async () => {
    const compiler = getCompiler('cp1251.js');
    const stats = await compile(compiler);

    expect(
      Array.from(
        execute(readAsset('main.bundle.js', compiler, stats))
      ).map((c) => c.charCodeAt(0))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with cp1251 with raw option', async () => {
    const compiler = getCompiler('cp1251.js', { raw: true });
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should not work with binary', async () => {
    const compiler = getCompiler('binary.js');
    const stats = await compile(compiler);

    expect(
      crypto
        .createHash('md5')
        .update(execute(readAsset('main.bundle.js', compiler, stats)))
        .digest('hex')
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with binary with raw option', async () => {
    const compiler = getCompiler('binary.js', { raw: true });
    const stats = await compile(compiler);

    expect(
      crypto
        .createHash('md5')
        .update(
          Buffer.from(execute(readAsset('main.bundle.js', compiler, stats)))
        )
        .digest('hex')
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with inline loader', async () => {
    const compiler = getCompiler('inline.js');
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');
  });

  it('should work with "ModuleConcatenationPlugin" plugin', async () => {
    const compiler = getCompiler(
      'simple.js',
      {},
      {
        mode: 'production',
        optimization: {
          minimize: false,
        },
      }
    );
    const stats = await compile(compiler);

    expect(
      execute(readAsset('main.bundle.js', compiler, stats))
    ).toMatchSnapshot('result');
    expect(Object.keys(stats.compilation.assets)).toMatchSnapshot('assets');
    expect(normalizeErrors(stats.compilation.warnings)).toMatchSnapshot(
      'warnings'
    );
    expect(normalizeErrors(stats.compilation.errors)).toMatchSnapshot('errors');

    if (stats.compilation.modules.size) {
      expect(stats.compilation.modules.size).toBe(1);
    } else {
      expect(stats.compilation.modules.length).toBe(1);
    }
  });
});
