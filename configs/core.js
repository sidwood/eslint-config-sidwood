'use strict'

module.exports = {
  'env': {
    es6: true
  },
  'extends': [
    'sidwood/rules/best-practices',
    'sidwood/rules/ecmascript-6',
    'sidwood/rules/nodejs-commonjs',
    'sidwood/rules/possible-errors',
    'sidwood/rules/strict-mode',
    'sidwood/rules/stylistic-issues',
    'sidwood/rules/variables'
  ],
  'globals': {
    context: true,
    given: true
  },
  'parserOptions': {
    ecmaVersion: 2018
  },
  'rules': {
  }
}
