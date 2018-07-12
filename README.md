# eslint-config-sidwood

[![Codefresh build status]( https://g.codefresh.io/api/badges/build?repoOwner=sidwood&repoName=eslint-config-sidwood&branch=master&pipelineName=main&accountName=sidwood&type=cf-1)]( https://g.codefresh.io/repositories/sidwood/eslint-config-sidwood/builds?filter=trigger:build;branch:master;service:5b476258cb00eb42d7fb8178~main)

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
