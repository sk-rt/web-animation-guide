---
title: ランダム
date: "2021-04-20"
excerpt: "Math.random()を使った処理と応用例"
tags: ["応用"]
featuredImage: ""
exercises: [{ file: "js-random.zip", title: "ランダム演習" }]
draft: false
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
＊正確には 1 は含まない。0〜0.999999999...まで

```js
const randomNum = Math.ramdom();
console.log(randomNum); // 0.7226758754462368 など

// 0〜nとしたければ単純に乗算すれば良い
const randomNum0to5 = Math.ramdom() * 5; // 0〜4.99999

// n1〜n2の場合は加算
const randomNum10to15 = Math.ramdom() * 5 + 10; // 10〜14.9999
```

## Math.floor()を使った整数化

Math.ramdom()そのままだと浮動小数点となり使い辛い場面もある。  
`Math.floor()` を使うことで*小数点以下切り捨て*して整数に変換できる。

```js
const randomNum = Math.ramdom() * 10; // 0.00 〜 9.99999...
const randomInt = Math.floor(randomNum); // 小数点以下切捨て
console.log(randomInt); // 0〜9の整数値
```

#### ✏️Tips: 特定の範囲の整数をランダムに取得する関数

```js
// 最小値・最大値を引数に渡すとその間の数を返す
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

// 使い方
const randomInt = getRandomInt(4, 10);
console.log(randomInt); // 4〜10のどれか
```

## 例 1

フォームに入力された最大・最小の数値の中の整数を、ランダムに表示する。

<iframe width="100%" height="400" src="//jsfiddle.net/sk_rt/4ub9gmoz/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 例 2

ランダムな画像に変更

<iframe width="100%" height="450" src="//jsfiddle.net/sk_rt/jnt4532w/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 例 3

ランダムな位置に移動

<iframe width="100%" height="450" src="//jsfiddle.net/sk_rt/zv7yexfw/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## 例 4

Web Animation API + ランダム

<iframe width="100%" height="400" src="//jsfiddle.net/sk_rt/ym8bu3nt/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
