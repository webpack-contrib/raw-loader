import { webpack } from './helpers';

describe('loader', () => {
  it('should works', async () => {
    const stats = await webpack('basic.js');
    const { modules } = stats.toJson();
    const [, file, separator] = modules;

    expect(file.source).toMatchSnapshot('file');
    expect(separator.source).toMatchSnapshot('separator');
    expect(stats.compilation.warnings).toMatchSnapshot('warnings');
    expect(stats.compilation.errors).toMatchSnapshot('errors');
  });
});
