module.exports = {
  '*.js': ['prettier --write', 'eslint --fix', 'git add'],
  '(!CHANGELOG.md).{json,md,yml,css}': ['prettier --write', 'git add'],
};
