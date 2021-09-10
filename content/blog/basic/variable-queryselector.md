---
title: 変数と要素の取得
date: "2019-02-01"
excerpt: "変数宣言とHTML要素の取得"
tags: ["基礎"]
featuredImage: ""
exercises: []
draft: false
---

# 変数宣言

繰り返し使う値に名前をつけることができる。  
JavaScript では `var` , `let` , `const` の 3 種類が使用可能。  
`var` は古い宣言方法なので本サイトでは `let` と `const`を使用する。

```js
// [変数定義]
// const 変数名 = 値
const siteName = "Motion Planning";

// let 変数名 = 値
let pageName = "JavaScriptについて";

// [再代入]
// 変数名 = 値
pageName = "変数と要素の取得";
```

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/hj0qp73a/embedded/result,js,html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

### const と let

`const`は一度宣言すると再代入不可で `let` は再代入可能。  
また、どちらも _同じ名前変数を定義するとエラーになる_。

- `const` => 変わらない値を入れる
- `let` => 変更される値を入れる

とひとまず覚えておけば良い。使い分けが面倒であれば `let`のみでも可。

```js
// const 宣言
const siteName = "Motion Planning";
siteName = "モーションプランニング"; // ⇦ 再代入エラー

// let 宣言
let today = "2021-09-01";
today = "2021-09-02"; // ⇦ 何度でも再代入可能

// 再定義はできない
let myAge = "21歳";
let myAge = "22歳"; // ⇦ 再定義エラー
```

### 変数の中身の確認

ある変数にどんな値が入っているか確認するには `console.log()` で確認する。

```js
const mysteryValue = "xxxxx";

console.log(mysteryValue); // console "xxxxx"と出力される。
```

### 変数名のルール

半角英数字+アンダーバーのみ使用可能。  
変数名は基本は [キャメルケース(CamelCase)](https://wa3.i-3-i.info/word1179.html) で定義すること。  
また数字から始まる変数はエラーになる。
＊ 定数(変わらない値)は大文字のスネークケースで表すことがある。

```js
const myName = "太郎"; // OK

const 自分の名前 = "太郎"; // 🙅‍♂️ エラーではないがNG
const 1name = "太郎"; // 🙅‍♂️ 数字から始まるとエラー
const my-name = "太郎"; // 🙅‍♂️ ハイフン、+などの記号が入っているとエラー

```

# 要素の取得

表示されている HTML 要素（タグ）を取得する。

## HTML を取得・操作できるまで

ページ読み込んだ瞬間は DOM ツリー の準備ができていないので要素を取得できない。  
DOM を取得・操作する時は以下の`DOMContentLoaded`イベントの中に書く様にする。

＊現時点ではお約束の様なものとしておく。 イベントや `addEventListener()`については後述する。

```js
document.addEventListener("DOMContentLoaded", function () {
  // DOM取得などの処理はこの中に書く
  const example = document.querySelector(".example");
});
```

## 単一要素の取得 `querySelector()`

`document.querySelector(セレクタ)`  
`document` からセレクタに一致する Html 要素を*一つ取得*する。

セレクタは [CSS セレクタ](https://web-d.netlify.com/css-selector/)と同じ記法。

```html
<header id="header">
  <h1 class="main-title">タイトル</h1>
</header>
```

```js
// classが `main-title` の要素を取得する。
const mainTitle = document.querySelector(".main-title");

// idが `header` の要素を取得する。
const header = document.querySelector("#header");
```
