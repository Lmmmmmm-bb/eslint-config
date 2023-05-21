module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    '@lmmmmmm/eslint-config-ts',
    'plugin:prettier/recommended',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['react'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
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
