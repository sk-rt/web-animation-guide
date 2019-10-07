---
title: DOM - イベント
date: "2019-03-03"
excerpt: " ユーザーの操作などを検知する。"
tags: ["DOM"]
featuredImage: ""
exercises: [{ file: "dom-basic.zip", title: "DOMの操作基礎" }]
---

# イベントとは

ボタンをクリックした時、マウスポインターが乗った時、スクロールして一番下まで行った時、等々...  
ページ上の**ユーザーアクションや状態の変化を検知する仕組み。**

簡単に言うと _○○○ に、 △△△ が起こったら、 ××× して_ とお願いする方法。

上記の*〜して*と言う命令を `addEventListener()` というメソッドを使って行う。

```js
イベント発生源.addEventListener("イベント名", 発生時に実行する関数);
```

# イベントの例

上記の `イベント名` の所に `click`,`load`,`scroll`などなど所定のイベントを指定できる。

## click イベント

ある要素をクリックした時(スマホの場合はタッチして離した時)に発生するイベント。

```js
// classが `alert-button` の要素を取得する。
const alertButton = document.querySelector(".alert-button");

// イベント発生時に呼び出される関数を定義
function showGreeting() {
  alert("こんにちは");
}

// alertButtonが、clickされたら、showGreetingを実行して！
alertButton.addEventListener("click", showGreeting); // 関数名には `()`をつけない
```

＊ 以下の様に関数定義を省略することも可能。

```js
const alertButton = document.querySelector(".alert-button");

alertButton.addEventListener("click", function() {
  alert("こんにちは");
});
```

## scroll イベント

ページや要素がスクロールした時に発生するイベント
主に `window`から発生する。

```js
// イベント発生時に呼び出される関数を定義
function getScrollPos() {
  console.log(window.scrollY);
}

// windowがscrollしたらgetScrollPosして！
window.addEventListener("scroll", getScrollPos);
```

## DOMContentLoaded イベント

DOM ツリーの準備ができたら発生するイベント。
`document` から発生する。

```js
function main() {
  console.log("DOMの準備完了");
}
document.addEventListener("DOMContentLoaded", main);
```

画像など、ページが全て読み込まれてから発火させてたい場合は window の`load`イベントを使う。

```js
function main() {
  console.log("全て読み込み完了");
}
window.addEventListener("load", main);
```
