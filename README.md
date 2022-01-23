# 📦 Winprovit  Sapo

## Confira o projeto rodando no servidor

[Projeto](https://henriquemelanda.com.br/winprovit-sapo/index.html)


## Instalando

Clone este repositório e npm install.

```bash
npm i
```

## Usando

### Servidor de desenvolvimento

```bash
npm start
```

Você pode ver o servidor de desenvolvimento em `localhost:8080`.

### servidor de produção

```bash
npm run build
```

### Teste e2e

```bash
npm start
```

```bash
npm run e2e
```

## Recursos

- [webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Sass](https://sass-lang.com/)
- [PostCSS](https://postcss.org/)

## Dependências

### webpack

- [`webpack`](https://github.com/webpack/webpack)
- [`webpack-cli`](https://github.com/webpack/webpack-cli)
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server)
- [`webpack-merge`](https://github.com/survivejs/webpack-merge)
- [`cross-env`](https://github.com/kentcdodds/cross-env)

### Babel

- [`@babel/core`](https://www.npmjs.com/package/@babel/core)
- [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)
- [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env)

### Loaders

- [`babel-loader`](https://webpack.js.org/loaders/babel-loader/)
- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/)
  - [`sass`](https://www.npmjs.com/package/sass)
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/)
  - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env)
- [`css-loader`](https://webpack.js.org/loaders/css-loader/)
- [`style-loader`](https://webpack.js.org/loaders/style-loader/)

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin)
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin)
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin)
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [`css-minimizer-webpack-plugin`](https://webpack.js.org/plugins/css-minimizer-webpack-plugin/)

### Linters

- [`eslint`](https://github.com/eslint/eslint)
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier)
  - - [`prettier`](https://github.com/prettier/prettier)
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack)

### Teste

- [`cypress`](https://www.cypress.io/)