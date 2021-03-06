module.exports = {
  env: {
    es6: true,
    "jest/globals": true,
  },
  parserOptions: {
    ecmaVersion: 7,
  },
  plugins: [
    '@zapier/zapier',
    'jest',
  ],
  extends: [
    'plugin:@zapier/zapier/base'
  ],
  rules: {
    'prefer-const': 'off', // We don’t like this rule works w/r/t object mutation
    'indent': [ 'warn', 2 ],
    'linebreak-style': [ 'error', 'unix' ],
    'quotes': [ 'error', 'single' ],
    'no-console': [ 'error', { allow: [ 'warn', 'error' ] }],
  },
}
