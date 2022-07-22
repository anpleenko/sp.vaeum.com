module.exports = {
  '*.{tsx,ts,jsx,js}': [
    'prettier --write',
    'eslint --max-warnings=0 --fix',
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
  '*.{png,jpeg,jpg,gif,svg}': ['imagemin-lint-staged'],
  'package.json': ['sort-package-json', 'prettier --write'],
};
