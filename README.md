# @releaseband/commitlint-config

commitlint shareable config

## Installing

```bash
npm i -D @releaseband/commitlint-config
npx install-peerdeps --dev @releaseband/commitlint-config
```

create `commitlint.config.js` file in the **root project folder**:

```js
module.exports = require('@releaseband/commitlint-config');
```

## Installing commit tool

```bash
npm i -D @commitlint/cz-commitlint commitizen
```

`.cz.json`:

create `.cz.json` file in the **root project folder**:

```js
{
  "path": "@commitlint/cz-commitlint"
}
```

add script in `package.json` file:

```js
{
  "scripts": {
    "commit": "cz"
  }
}
```
