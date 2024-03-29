module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        bracketSpacing: true,
        singleQuote: true,
        arrowParens: 'always',
        bracketSameLine: false,
        jsxSingleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        endOfLine: 'lf',
      },
    ],
  },
};
