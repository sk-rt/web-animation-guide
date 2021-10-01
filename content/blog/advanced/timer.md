---
title: タイマー処理
date: "2021-04-01"
excerpt: " setTimeout() / setInterval() を使った処理とrequestAnimationFrame() を使ったアニメーション"
tags: ["応用"]
featuredImage: ""
exercises: [{ file: "js-timer-animation.zip", title: "タイマーアニメーション演習" }]
draft: false
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
＊`number++`は `number = number+1`と同じ意味 (1 を加算)

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
let timerID = null; // タイマーID保存用の変数を宣言
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

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/uqphb3wr/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# アニメーション用のタイマー処理

アニメーション専用のタイマーに`requestAnimationFrame()` がある。  
使い方は `requestAnimationFrame(関数)`。  
常にブラウザのリフレッシュレート、 _1/60 秒(60FPS)_ 後に、関数が、 _1 度だけ実行_ される。

```js
let position = 0;
function loop() {
  console.log("Pos:" + position);
  position++;
  // 関数の終わりに、次のrequestAnimationFrameを実行
  requestAnimationFrame(loop);
}
loop();
```

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/q35f8z6o/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## アニメーションのストップ `cancelAnimationFrame`

setInterval と同じく、requestAnimationFrame は返り値として`リクエストID`を受け取れる。
この ID を`cancelAnimationFrame` の引数に渡す事で繰り返しを止める事ができる。

```js
let reqID = null; // リクエストID保存用の変数
let position = 0;
function loop() {
  console.log("Pos:" + position);
  position++;
  // requestAnimationFrameを実行し、返り値をreqIDに代入
  reqID = requestAnimationFrame(loop);
}
loop();

// stopButtonをClickでアニメーションをストップ;
function stop() {
  cancelAnimationFrame(reqID);
}
const stopButton = document.querySelector("stop");
stopButton.addEventListner("click", stop);
```

もしくは loop 関数内で停止するかどうかの判定ができる時は、  
単に `requestAnimationFrame(loop)` を実行しなければ良い。

```js
let position = 0;
function loop() {
  console.log("Pos:" + position);
  position++;
  // positionが1000以上の時は次のフレームを実行しない。
  if (position > 1000) {
    requestAnimationFrame(loop);
  }
}
loop();
```

## 三角関数を使った例

`Math.sin()` `Math.cos()` を使った円運動。  
＊サインもコサインも常に -1〜1 の値になる。

<iframe width="100%" height="400" src="//jsfiddle.net/sk_rt/ncLpr9b3/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

X 軸だけ円運動 & click イベントで Start/Stop

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/ufg3rdv6/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

図解: wikipedia より

![](https://upload.wikimedia.org/wikipedia/commons/b/bd/Sine_and_cosine_animation.gif)

参考: [三角関数、何に使うの？→ 点を回すことができます（すごい）](https://www.ajimatics.com/entry/2019/01/11/092529)
