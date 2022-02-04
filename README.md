# @releaseband/commitlint-config

commitlint shareable config

## Installing

```bash
npm i -D @releaseband/commitlint-config
npx install-peerdeps --dev @releaseband/commitlint-config
```

create `.commitlintrc.js` file in the **root project folder**:

```js
module.exports = require('@releaseband/commitlint-config');
```

## Installing commit tool

```bash
npm i -D @commitlint/cz-commitlint commitizen
```

create `.cz.json` file in the **root project folder**:

```json
{
  "path": "@commitlint/cz-commitlint"
}
```

add script in `package.json` file:

```json
{
  "scripts": {
    "commit": "cz"
  }
}
```

## Add commit hook

initialize husky:

```bash
npx husky-init && npm install
```

add commit-msg hook:

```bash
npx husky add .husky/commit-msg 'npx --no -- commitlint --edit $1'
```
