---
title: Web Animations API
date: "2021-04-10"
excerpt: "標準仕様のWeb Animations APIを使ったアニメーション"
tags: ["応用"]
featuredImage: ""
exercises: [{ file: "", title: "" }]
draft: false
---

# Web Animations API とは

[CSS Animation](https://web-d.netlify.app/animation-animation/) と同様の機能 JavaScript から使う事ができる _標準 API_ 。  
標準仕様なのでライブラリを使わず手軽にアニメーションができる。  
比較的新しい機能だが、現在は主要なブラウザでは利用可能で、今後はよりポピュラーなアニメーション手法になると思われる。

## 使い方

DOM エレメントの `animate()` メソッドを使用する。  
第一引数にキーフレーム配列、第二引数にオプションオブジェクトを渡す。  
`element.animate(キーフレーム, アニメーションオプション)`

```js
const element = document.querySelector(".element");
element.animate(
  // キーフレームを配列で指定
  [
    {
      transform: "translateX(0px)",
    },
    {
      transform: "translateX(100px)",
    },
  ],
  // アニメーションオプション
  {
    duration: 1000, // アニメーションする時間 （ミリ秒）
    easing: "ease", // CSS イージング
    iterations: Infinity, // 繰り返す回数 Infinityで無限
    direction: "alternate", // 再生方向 alternateで両方繰り返し
  }
);
```

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/1a0ydp34/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# キーフレーム

`animate()` メソッドの第一引数に指定する。  
CSS animation の [@keyframe](https://qiita.com/7968/items/1d999354e00db53bcbd8) の様にアニメーションの初期状態から終了までの時系列の style を配列で指定する。

![キーフレーム](./js-waapi.png)

```js
element.animate(
  // キーフレーム配列
  [
    {
      // 0%の時のstyle（初期状態）
    },
    {
      // 100%の時のstyle（終了状態）
    },
  ],
  options
);
```

3 つ以上 keyframe を入れると、フレーム数に応じてタイムラインが分割される。

```js
[
  {
    // 0%の時のstyle（初期状態）
  },
  {
    // 33.3%の時のstyle
    // 1秒のアニメーションなら0.33秒の時
  },
  {
    // 66.6%の時のstyle
    // 1秒のアニメーションなら0.66秒の時
  },
  {
    // 100%の時のstyle（終了状態）
  },
];
```

また、 `offset` プロパティを使ってフレームの位置を調整できる。  
値には 0〜1 の間の数値を指定する。（0.5 なら 50%の位置）

```js
[
  {
    // 0%の時のstyle（初期状態）
    offset: 0,
  },

  {
    // 指定しなければ50%の位置だが、20％の位置に指定
    offset: 0.2,
  },
  {
    // 指定しなければ100%の位置だが、80％の位置に指定
    offset: 0.8,
  },
];
```

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/a6jr2n0z/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# アニメーションオプション

`animate()` メソッドの第二引数に指定する。  
再生時間やイージング、再生回数を設定する。

```js
element.animate(
  keyframes,
  // アニメーションオプション
  {
    duration: 1000, // アニメーションする時間 （ミリ秒）
    easing: "linear", // CSS イージング
    iterations: 1, // 繰り返す回数 Infinityで無限
    direction: "alternate", // 再生方向 alternateで両方繰り返し
  }
);
```

| オプション   | 説明                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------- |
| `duration`   | アニメーションの再生時間。ミリ秒で指定。 CSS の`animation-duration` と同様               |
| `delay`      | アニメーションの再生を遅らせる時間。ミリ秒で指定。CSS の`animation-delay` と同様         |
| `easing`     | イージングを指定。`linear`,`ease`など。＊CSS の `animation-timing-function`と同様。      |
| `direction`  | アニメーションの再生方向。CSS の`animation-direction`と同様。                            |
| `iterations` | 繰り返す回数。`Inifinity` で無限に繰り返し。 CSS `animation-iteration-count` と同様。    |
| `fill`       | アニメーションの実行の前後にどう style を適用するか。 CSS `animation-fill-mode` と同様。 |

＊easing については[こちらを参考](https://web-d.netlify.app/animation-transition/#%EF%BC%8A%E3%82%A4%E3%83%BC%E3%82%B8%E3%83%B3%E3%82%B0%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)  
＊他、`iterationStart` , `endDelay`, `composite` などのオプションあり。

<iframe width="100%" height="600" src="//jsfiddle.net/sk_rt/k3n98rmo/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# アニメーションのコントロール

`animate()` は返り値として Animation オブジェクトを受け取れる。  
Animation オブジェクトには `play()` `pause()`などのメソッドがあり、アニメーションの再生などをコントロールできる。

```js
// myAnimation に Animationオブジェクトを代入
const myAnimation = element.animate(
    ...
);
// 一時停止
myAnimation.pause();

// 再生開始
myAnimation.play();
```

| メソッド   | 説明                     |
| ---------- | ------------------------ |
| `play()`   | アニメーション再生開始。 |
| `pause()`  | 一時停止。               |
| `cancel()` | 再生の中止。             |

animate()はデフォルトで呼び出した瞬間に再生されるので、後で再生したい場合は一度 `pause()` して任意のタイミングで `play()` する。

```js
const myAnimation = element.animate(
    ...
);
// 一旦停止しておく
myAnimation.pause();

// ボタンがクリックされたら再生
startButton.addEventListner('click',function(){
    myAnimation.play();
})

```

# 応用サンプル

## querySelectorAll との併用

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/3yznvtwf/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## アニメーションの連結

Animation オブジェクトの `finish` イベントを使うとアニメーションの終了時に処理行うことができる。  
複数のアニメーションを連続して実行したい時に便利。  
イベントの使い方は HTML 要素と同じく `addEventListener('finish', function)` でイベントを登録できる。

```js
const animation1 = element.animate(
    ...
);
const animation2 = element.animate(
    ...
);
animation2.pause(); // 一旦停止しておく

// animation1が完了後、animation2を再生
animation1.addEventListener("finish", function() {
  animation2.play();
});

```

<iframe width="100%" height="400" src="//jsfiddle.net/sk_rt/vf61hjzn/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
