# Installing

create [.npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc) file in the **root project folder**:

```
echo @releaseband:registry=https://npm.pkg.github.com > .npmrc
```

```
npm i @releaseband/commitlint-config
npx install-peerdeps --dev @releaseband/commitlint-config
```

`commitlint.config.js`:

```js
module.exports = require("@releaseband/commitlint-config");
```
