import loader from '../src';

it('validate options', () => {
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
