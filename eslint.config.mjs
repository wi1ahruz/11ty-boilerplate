import neostandard from 'neostandard';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  ...neostandard({
    ignores: ['**/vendor/'],
  }),
  eslintConfigPrettier,
];
