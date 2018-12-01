module.exports = {
  env: {
    // todo: Set jest env only for test files
    jest: true,
  },
  extends: [
    'standard',
    'standard-react',
  ],
  parser: 'babel-eslint',
  plugins: [
    'babel',
    'jest',
    'react',
  ],
  rules: {
    // Core
    'comma-dangle': ['error', 'always-multiline'],

    // Babel
    'babel/semi': 0,

    // React
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'never',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],

    // template-curly-spacing/indent are off due to a bug in babel-eslint@10.0.1
    // see: https://github.com/babel/babel-eslint/issues/681
    // todo: Remove these when the bug is fixed
    'template-curly-spacing' : 'off',
    'indent': 'off',
  },
}
