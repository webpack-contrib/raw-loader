/* eslint-disable */
import fs from 'fs';
import { runLoaders } from 'loader-runner';
import Promise from 'bluebird';
import { getFixtureResource, getFixture, getLoader } from './test-utils';

const runLoadersPromise = Promise.promisify(runLoaders);
const readFilePromise = Promise.promisify(fs.readFile, { context: fs });

const loaders = getLoader();

describe('Raw Loader: Fixture: basic', () => {
  const fixtureName = 'basic.scss';

  beforeEach(() => {

  });

  test('should load scss file', async () => {
    const { result } = await runLoadersPromise({ resource: getFixtureResource(fixtureName), loaders });
    const expected = [ 'export default = ".another-scss-module {\\n  background: hotpink;\\n}"' ];

    expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toMatchSnapshot();
  });
});
