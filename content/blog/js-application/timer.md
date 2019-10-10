---
title: 応用 - タイマー処理
date: "2019-04-01"
excerpt: " setTimeout() / setInterval() を使ったアニメーション"
tags: ["応用"]
featuredImage: ""
exercises: []
---

# タイマー処理

JavaScript で N 秒後にある処理を実行したい、N 秒ごとに実行したい、などを行いたい時は
`window.setTimeout()` `window.setInterval()` を使用する。 window.は省略可。

## setTimeout( 関数 , 時間 )

指定した時間経過後に処理を実行する。  
＊単位はミリ秒( 1000 = 1 秒 )

```js
function greeting() {
  console.log("こんにちは");
}
setTimeout(greeting, 3000); // 3秒後に greeting を実行
```

## setInterval( 関数 , 時間 )

一定時間ごとに処理を実行する。

```js
let number = 1;
function counter() {
  console.log(number + "回目です。");
  number++;
}
setInterval(counter, 3000); // 3秒ごとにcounterを実行
```

## 繰り返しを止める clearInterval( timerID )

setInterval は返り値として`タイマーID`を受け取れる。
この ID を`clearInterval`の引数に渡す事で繰り返しを止める事ができる。

＊ setTimeout を止めるのは`clearTimeout`

```js
let timerID; // タイマーID用の変数を宣言
let number = 1;
function counter() {
  console.log(number + "回目です。");
  if (number === 10) {
    clearInterval(timerID); // numberが10の時に繰り返しを止める。
  }
  number++;
}
timerID = setInterval(counter, 3000);
```
