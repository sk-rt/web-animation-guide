---
title: 変数と要素の取得・操作
date: "2021-02-02"
excerpt: "const/letでの変数宣言とquerySelector()でHTML要素の取得・操作"
tags: ["基礎"]
featuredImage: ""
exercises: [{ file: "js-dom-basic.zip", title: "要素の取得と操作" }]
draft: false
---

# 変数宣言

![変数](./js-variable.png?v=4)

繰り返し使う値に名前をつけて保存しておくことができる。  
JavaScript では `var` , `const`, `let` の 3 種類が使用可能。  
`var` は古い宣言方法なので本サイトでは `const`と `let`を使用する。

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

表示されている HTML 要素を取得する。

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

# 要素の操作、プロパティの取得

querySelector で取得した要素は `Element`[オブジェクト](/basic/data-type-operator/#%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88%E5%9E%8Bobject)になっている。  
＊詳細なプロパティはタグの種類などによって違う。  
＊参考: [Element](https://developer.mozilla.org/ja/docs/Web/API/Element)

よく使う操作例を以下に紹介。

## class 名の追加・削除

`element.classList` を使って element に class を追加・削除する。

```js
const myElement = document.querySelector(".my-element");

// 要素に `my-class` classを追加
myElement.classList.add("my-class");
// ⇨ <div class="my-element my-class">

// 要素に `my-class` classを削除
myElement.classList.remove("my-class");
// ⇨ <div class="my-element">
```

## style の変更

`element.style` element の style を変更する。  
<small>＊変更した style は CSS で定義した style より優先される。</small>

```js
const myElement = document.querySelector(".my-element");

// 文字カラーを変更
myElement.style.color = "#FF0000";

// 文字サイズを変更
myElement.style.fontSize = "20px";

// ⇨ <div class="my-element" style="color:#FF000; font-size:20px;">
```

＊ハイフンが入った CSS プロパティはハイフンを取って直後の文字を大文字に変更する。  
ex. `background-color` => `backgroundColor`

## 中身を取得・変更

`element.innerHTML` element の 中身を取得・変更する。

```js
const myElement = document.querySelector(".my-element");

//  中身を取得して `content` に代入
const content = myElement.innerHTML;

// 中身を置き換え
myElement.innerHTML = "中身です。";
```

# 要素を取得できない？

ページ読み込んだ瞬間は DOM ツリー の準備ができていないので要素の取得ができない。  
なので*次のいずれか*で構築を待つ必要がある。

### A. script タグの `defer` 属性

script の読み込みタグに`defer`属性をつけると、DOM 構築後に読み込んだ script を実行してくれる。  
＊ただしインラインでの JavaScript は使用不可。

```html
<script src="./js/main.js" defer></script>

<!-- ↓↓↓ これは不可 ❌ -->
<script defer>
  const myElement = document.querySelector(".my-element"); // → null
</script>
```

### B. `DOMContentLoaded` イベント

`DOMContentLoaded` イベントを使うと DOM の構築完了後に処理を実行できる。  
＊ イベントや関数、 `addEventListener()`、については後述する。

```js
document.addEventListener("DOMContentLoaded", function () {
  // DOM取得などの処理はこの中に書く
  const example = document.querySelector(".example");
});
```
