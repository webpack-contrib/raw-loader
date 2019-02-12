import loader from '../src';

it('validation', () => {
  const validate = (options) =>
    loader.call(
      Object.assign(
        {},
        {
          query: options,
        }
      ),
      'Text'
    );

  expect(() => validate({})).not.toThrow();
  expect(() => validate(true)).not.toThrow();
  expect(() => validate({ unknown: true })).toThrowErrorMatchingSnapshot();
});
