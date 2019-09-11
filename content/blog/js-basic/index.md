---
title: JS 基礎文法 1
date: "2019-02-01"
excerpt: "JSファイルの作成や変数宣言"
tags: ["基礎"]
featuredImage: ""
samples:
---

# JS ファイルの作成・読み込み

JavaScript は拡張子 `.js` をつけて保存する。  
保存した js ファイルを HTML から読みこむと、内容のスクリプトが 1 度だけ実行される。

```js
// main.js として保存
// アラート「Hello, JS」と表示される
alert("Hello, JS");
```

```html
<!-- <head>内でmain.jsを読みこみ -->
<script src="./main.js"></script>
```

# ブラウザでの確認方法と Console API

Chrome で`表示=>開発/管理`からデベロッパーツールを起動する。(`option + ⌘ + i`)  
エラーなどが発生するとデベロッパーツールの `console` に表示される。

また、JavaScript の任意の場所に `console.log(値)` を入れると上記の `console`　に表示させることができる。

JS で開発するのには必須なので _作業中は常にデベロッパーツール表示させる様にすること。_

```js
// `console` にログを出力
console.log("Hello, JS");
```

# 変数宣言

繰り返し使う値などに名前をつけることができる。  
JS では `var` , `let` , `const` の 3 種類が使用可能。  
`var` は古い宣言方法なので本サイトでは `let` `const`を使用する。

```js
// const 変数名 = 値

const siteName = "Motion Planning";
```

### const と let

`const`は一度宣言すると再代入不可で `let` は再代入可能。  
また、どちらも _同じ名前変数を定義するとエラーになる_。

<!--
| `const`      | `let`      |
| ------------ | ---------- |
| 再代入不可能 | 再代入可能 | -->

```js
// const 宣言
const siteName = "Motion Planning";
siteName = "モーションプランニング"; //　⇦ 再代入エラー

// let 宣言
let today = "2019-09-13";
today = "2019-09-14"; //  ⇦ 何度でも再代入可能

// 再定義はできない
let myAge = "21歳";
let myAge = "22歳"; //  ⇦ エラー
```

### 中身の確認

ある変数にどんな値が入っているか確認するには `console.log()` で確認する。

```js
const mysteryValue = "xxxxx";

console.log(mysteryValue); // console "xxxxx"と出力される。
```

### 変数名のルール

半角英数字のみ使用可能。  
変数名は基本は [キャメルケース(CamelCase)](https://wa3.i-3-i.info/word1179.html) で定義すること。  
また数字から始まる変数はエラーになる。
＊ 定数(変わらない値)は大文字のスネークケースで表すことがある。

```js
const myName = "太郎"; // OK

const 自分の名前 = "太郎"; // 🙅‍♂️ エラーではないがNG
const 1name = "太郎"; // 🙅‍♂️ 数字から始まるとエラーになる
```
