# eslint-config-sidwood

My personal ESLint configuration.

## Installation

```bash
npm install --save-dev eslint eslint-config-sidwood
```

## Usage

Create the following `.eslintrc` file in your project root.

```json
{
  "extends": "sidwood",
  "root": true
}
```

## Linting

This project lints itself.

```bash
npm link
npm link eslint-config-sidwood
npm run lint
```
