module.exports = {
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
  'package.json': ['sort-package-json', 'prettier --write'],
};
