# Dependencies Developer React

## Folder Structure

After creation, your project should look like this:

```
my-app/
 app/
   src/
    js/
       app.jsx
    style/
       index.scss
 index.html
webpackage.config.js
.babelrc
.eslintignore
.eslintrc.js
.gitignore
pakage.json
README.md
```
## Parametres 
* Initialize npm in proyect
```
npm init
```

## If required config components


* Install dependencies development:

```
npm i webpack webpack-dev-server babel-cli babel-loader babel-core babel-preset-es2015 babel-preset-react babel-preset-stage-2 -D
```

* Install dependencies: 

```
npm i react react-dom -S
```
* Install dependencies development CSS Sass

```
npm i extract-text-webpack-plugin style-loader url-loader file-loader css-loader node-sass sass-loader optimize-css-assets-webpack-plugin -D
```

* Install dependencies development Jest 
```
npm i babel-jest jest -D
``` 
* Install dependencies Jest 
```
npm i axios -S
``` 
* Install dependencies Eslint only Visual Studio Code for Atom and Sublime is different ¡Alert!
```
  eslint --init` 
  npm i eslint babel-eslint -D`
``` 