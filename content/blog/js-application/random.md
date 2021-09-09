---
title: 応用 - ランダム
date: "2019-04-02"
excerpt: "Math.random()を使った処理"
tags: ["応用"]
featuredImage: ""
exercises: [{ file: "random.zip", title: "ランダム演習" }]
draft: true
---

# ランダム(乱数)

JavaScript で ランダムな値を取得したい時は
`Math.random()` を使用する。

> #### Math オブジェクト
>
> Math.sin()や Math.round() など数学・計算に関する定数やメソッドが定義されている。  
> 参考: [Math オブジェクト](http://javascript.pc-users.net/builtin/math/)

## Math.random()

0〜1 の間(少数点)のランダムな数値を返す。  
＊1 は含まない。0.999999999...まで

```js
const randomNum = Math.ramdom();
console.log(randomNum); // 0.7226758754462368 など
```

## Math.floor()を使った整数化

`Math.floor()` で*小数点以下切り捨て*して任意の数のランダムな*整数*を取得できる。

```js
const randomNum = Math.ramdom() * 10; // 0.00 〜 9.99999...
const randomInt = Math.floor(randomNum); // 小数点以下切捨て
console.log(randomInt); // 0〜9の整数値
```

## 例 1

フォームに入力された最大・最小の数値の中の整数を、ランダムに表示する。

<iframe height="400" style="width: 100%;" scrolling="no" title="Random" src="https://codepen.io/RsakaiForEducation/embed/abbVZRY?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/abbVZRY'>Random</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

#### ✏️Tips: ランダムな整数

```js
// 最小値・最大値を引数に渡すとその間の数を返してくれる関数。
// 注意: maxは含まれない(max未満)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
const randomInt = getRandomInt(4, 10);
console.log(randomInt); // 4〜9のどれか
```

## 例 2

ランダムな画像に変更

<iframe height="450" style="width: 100%;" scrolling="no" title="Random Img" src="https://codepen.io/RsakaiForEducation/embed/dyyZppB?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/dyyZppB'>Random Img</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## 例 3

ランダムな位置に移動

<iframe height="500" style="width: 100%;" scrolling="no" title="Random Position" src="https://codepen.io/RsakaiForEducation/embed/ZEEaLgX?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/ZEEaLgX'>Random Position</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
