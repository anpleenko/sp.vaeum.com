module.exports = {
  '*.{ts,tsx}': ['eslint --fix --ext .js,.jsx,.ts,.tsx', 'prettier --write'],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
  'package.json': ['sort-package-json', 'prettier --write'],
};
