---
title: タイマー処理
date: "2021-04-01"
excerpt: " setTimeout() / setInterval() を使った処理とrequestAnimationFrame() を使ったアニメーション"
tags: ["応用"]
featuredImage: ""
exercises: [{ file: "", title: "タイマーアニメーション演習" }]
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
stopButton.addEventListner("click", function () {});
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
requestAnimationFrame(loop);
```

<!-- # setInterval を使ったアニメーション

## 例 1

<iframe height="400" style="width: 100%;" scrolling="no" title="setInterval" src="https://codepen.io/RsakaiForEducation/embed/bGGVVxr?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/bGGVVxr'>setInterval</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 例 2 -->
<!--
`Math.sin()` `Math.cos()` を使った円運動。
＊サインもコサインも常に -1〜1 の値になる。

参考： [Math.sin()](http://www.htmq.com/js/math_sin.shtml)

<iframe height="500" style="width: 100%;" scrolling="no" title="setInterval+sin()/cos()" src="https://codepen.io/RsakaiForEducation/embed/ZEEbbPm?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/ZEEbbPm'>setInterval+sin()/cos()</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 例 3

click イベントでアニメーションの開始/停止

<iframe height="400" style="width: 100%;" scrolling="no" title="setInterval+event" src="https://codepen.io/RsakaiForEducation/embed/xxxwZOG?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/xxxwZOG'>setInterval+event</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<iframe height="400" style="width: 100%;" scrolling="no" title="requestAnimationFrame" src="https://codepen.io/RsakaiForEducation/embed/dyyYGmW?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/dyyYGmW'>requestAnimationFrame</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe> -->
