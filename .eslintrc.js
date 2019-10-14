module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript'
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'comma-dangle': ['error', 'never'],
    'import/extensions': 'off',
    'max-len': ['error', { code: 120, tabWidth: 2, ignoreUrls: true }],
    'no-trailing-spaces': ['error', { ignoreComments: true }],
    'import/no-extraneous-dependencies': 'off',
    indent: 'error',
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/max-attributes-per-line': ['error', {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }],
    '@typescript-eslint/no-explicit-any': 'error'
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
};
