# React-TDD

所有的開發都從測試開始，寫一個錯誤測試→建立元件→通過測試→重構測試

## Create React Project

1. 建立(**mkdir**)資料夾
2. 初始化(**npm init**),產生package.json
3. Teat Command type in `jest`
4. install package
```
npm install --save-dev jest
npm install --save react react-dom
npm install --save-dev @babel/preset-env @babel/preset-react
npm install --save-dev @babel/plugin-transform-runtime
npm install --save @babel/runtime

```
5. cerate `.babelrc`
```
{
  "presets": ["@babel/env", "@babel/react"],
  "plugins": ["@babel/transform-runtime"]
}
```
6. 如果需要webpack
```
npm install --save-dev webpack webpack-cli babel-loader
```
**package.json**
```js
{
    ...
    "scripts": {
        "build": "webpack"
        "test": "jest --watch"
    },
  ...
}
```
**create webpack.config.js**
```js
const path = require("path");
const webpack = require("webpack");

module.exports = {
 mode: "development",
 module: {
   rules: [{
     test: /\.(js|jsx)$/,
     exclude: /node_modules/,
     loader: 'babel-loader'}]}
};
```

7. push git
```
git init
echo "node_modules" > .gitignore
git add .
git commit -m ""
```



## First Test
install: `npm install --save-dev jest`
add `test` folder
write first test
```js
describe('Appointment', () => {
    it('test description', () => {
        expect(....)
    });
});
```

command : `npm test`

## Great Test

**Good Test (3A)**
*Arrange* : 設立相依物件的互動。
*Act* : 在`Production`環境中執行test。
*Assert* : 驗證是否符合預期。

**Great Test (+3A)**
*Short*: 簡短的
*Descriptive*: 具描述性
*Independent of other tests*:不和其他測試相依，具獨立性
*Has no side-effects*: 沒有副作用

## ReactTestUtils
React 透過合成事件(SyntheticEvent)進行跨瀏覽器溝通，使dom在不同瀏覽器做一樣的事情，所以無法透過JSDOM去觸發標準事件。

```js
import ReactTestUtils from 'react-dom/test-utils';
```
**Simulate**: 模擬事件，但不會自動提供相關的dom屬性，要自己新增。EX: Click、


參考: 實用測試工具([Test Utilities](http://react.html.cn/docs/test-utils.html))

## 疑難雜症
1. Abount document undefine: Jest 如果要自動產生document， 是由`jsdom` 所產生, Jest environment 預設是`jsdom`，如果要自己include html
要在package.json 中加上
```
"jest": {
  "testEnvironment": "node"
}
```
2. 注意變數可能會變髒: 每一次測試案例都將變數變為空，避免發生這種狀況

3. 自動執行Test: `jest --watchAll`

## 語法
1. 在執行test 之前，會做什麼事情，EX: create div
```js
beforeEach(() => {
    container = document.createElement('div');
});
```

2. 忽略測試
```js
it.skip(()=>{....})
```