import { webpack } from './helpers';

describe('loader', () => {
  it('should works', async () => {
    const stats = await webpack('basic.js');
    const { modules } = stats.toJson();
    const [inline, , file, separator] = modules;

    expect(inline.source).toMatchSnapshot('inline');
    expect(file.source).toMatchSnapshot('file');
    expect(separator.source).toMatchSnapshot('separator');

    expect(stats.compilation.warnings).toMatchSnapshot('warnings');
    expect(stats.compilation.errors).toMatchSnapshot('errors');
  });
});
