# @suolun/aliyun-captcha
[![NPM Version](http://img.shields.io/npm/v/@suolun/aliyun-captcha.svg?style=flat-square)](https://www.npmjs.com/package/@suolun/aliyun-captcha)
[![Download Month](http://img.shields.io/npm/dm/@suolun/aliyun-captcha.svg?style=flat-square)](https://www.npmjs.com/package/@suolun/aliyun-captcha)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

@suolun/aliyun-captcha

## repository


## Demo


## Run Example
Your can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone `
2. Go to the directory `cd your-module-directory`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1/examples/test.html`) in your browser

## Installation
```bash
npm i -S @suolun/aliyun-captcha
```

## Global name - The variable the module exported in `umd` bundle
`AliyunCaptcha`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import * as AliyunCaptcha from '@suolun/aliyun-captcha'
```

Use in html, see what your can use in [CDN: unpkg](https://unpkg.com/@suolun/aliyun-captcha/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/@suolun/aliyun-captcha/lib/umd/<--module-->.js"></script>
```

## style
For building style, you may need to import the css or scss file:
```js
// scss
import 'node_modules/@suolun/aliyun-captcha/lib/css/index.scss'

// css
import 'node_modules/@suolun/aliyun-captcha/lib/css/index.css'
```
Or
```scss
// scss
@import 'node_modules/@suolun/aliyun-captcha/lib/css/index.scss'

// css
@import 'node_modules/@suolun/aliyun-captcha/lib/css/index.css'
```

Or, you can build your custom style by copying, editing and importing `node_modules/@suolun/aliyun-captcha/lib/css/index.scss`

## QA

1. Error `Error: spawn node-sass ENOENT`

> You may need install node-sass globally, `npm i -g node-sass`
