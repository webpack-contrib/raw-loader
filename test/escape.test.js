/* eslint-disable
  prefer-destructuring,
*/
import webpack from './helpers/compiler';

describe('Loader', () => {
  test('Escape', async () => {
    const config = {
      loader: {
        test: /\.txt/,
        options: {},
      },
    };

    const stats = await webpack('escape/fixture.js', config);
    const { source } = stats.toJson().modules[1];

    expect(source).toMatchSnapshot();
  });
});
