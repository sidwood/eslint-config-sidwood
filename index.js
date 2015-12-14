'use strict';

module.exports = {
  'extends': [
    'eslint-config-sidwood/rules/best-practices.js',
    'eslint-config-sidwood/rules/ecmascript-6.js',
    'eslint-config-sidwood/rules/nodejs-commonjs.js',
    'eslint-config-sidwood/rules/possible-errors.js',
    'eslint-config-sidwood/rules/strict-mode.js',
    'eslint-config-sidwood/rules/stylistic-issues.js',
    'eslint-config-sidwood/rules/variables.js'
  ],
  'env': {
    browser: false,
    node: true,
    es6: false
  },
  'ecmaFeatures': {
    arrowFunctions: true,
    binaryLiterals: true,
    blockBindings: true,
    classes: true,
    defaultParams: false,
    destructuring: true,
    forOf: true,
    generators: true,
    modules: false,
    objectLiteralComputedProperties: true,
    objectLiteralDuplicateProperties: false,
    objectLiteralShorthandMethods: true,
    objectLiteralShorthandProperties: true,
    regexYFlag: true,
    regexUFlag: true,
    spread: true,
    superInFunctions: true,
    templateStrings: true,
    jsx: false
  },
  'globals': {},
  'rules': {}
};
