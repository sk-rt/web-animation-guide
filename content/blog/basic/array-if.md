---
title: 条件分岐とループ
date: "2021-02-05"
excerpt: "if文や反復処理について"
tags: ["基礎"]
featuredImage: ""
exercises: [{ file: "", title: "" }]
draft: true
---

# 条件分岐 (if / else 文)

`if(条件式)` 処理を条件分岐させる。  
条件式が `true`の場合、中の処理が実行される。

```js
if (条件式) {
  // 条件に一致した時の処理
}
```

## 単体の値 （ truthy / falsy） での条件式

```js
const isMinor = true;
if (isMinor) {
  // ここは実行される
}

/* 条件の前に`!` をつけるとtrue/falseを反転できる。 */
if (!isMinor) {
  // 実行されない
}

/* 数値の0は`false`として評価される。*/
if (0) {
  // 実行されない
}
/* null や undefined も `false` */
if (null) {
  // 実行されない
}
/* 空の文字列 も `false` */
if ("") {
  // 実行されない
}
```

どんな値が true/false になるかは以下を参照  
[条件分岐 · JavaScript Primer](https://jsprimer.net/basic/condition/)

## [比較演算子](/basic/data-type-operator/#%E6%AF%94%E8%BC%83%E6%BC%94%E7%AE%97%E5%AD%90)を使った条件式

```js
// 数値を比較
const myAge = 45;
if (myAge > 20) {
  // ここは実行される
  console.log("あなたは成人です。");
}

// 文字列を比較
const myFavoridFood = "寿司";
if (myFavoridFood === "カレー") {
  // ここは実行されない
  console.log("あなたはカレー好きです。");
}
```

## else 文

if に続けて、`else { }` を書くと、その上の条件に一致しなかった時の処理を書ける。

```js
if (条件式) {
  // 条件に一致した時の処理
} else {
  // その他の時
}
```

```js
const myAge = 45;
if (myAge < 20) {
  console.log("あなたは未成年です。");
} else {
  console.log("あなたは成人です。");
}
```

# ループ (for 文)

同じ処理を反復(ループ)して行う。  
また、配列の値を一つずつ取り出して処理をする時に使う。

```js
for (初期化式; 条件式; 増分式) {
  繰り返し実行する処理;
}
```

## 指定した回数の処理を実行

`for (let index = 最初の数; index < 回数; index++)`

```js
// 変数 indexを宣言し; indexが100より大きくなるまで; indexに1を足す
for (let index = 0; index < 100; index++) {
  console.log(index); // 0, 1, 2, ... 99
}
// indexが 100>=になると ループを抜ける。
```

> `++` は[インクリメント](https://jsprimer.net/basic/operator/#increment-operator)といい、直前の変数に `+1` する演算子。  
> `x++`は`x = x + 1` と同じ意味。また、`-1`する場合は `--`

## 配列の値を一つずつ処理

```js
const myFriends = ["Tanaka", "Suzuki", "Yamada", "Saito", "Ikeda", "Mike"];

// myFriends.lengthは 6なので、indexは0〜5まで繰り返す。
for (let index = 0; index < myFriends.length; index++) {
  const friend = myFriends[index] + "さん";
  console.log(friend); // "Tanakaさん","Suzukiさん", ...,"Mikeさん"
}
```

`配列名.length` はその配列の数。  
 上記の例だと `myFriends.length` は `6` になる。

## break 文

`break`を使うと途中でループを抜けることができる。  
主に `if()`と組み合わせて使う。

```js
const myFriends = ["Tanaka", "Suzuki", "Yamada", "Saito", "Ikeda", "Mike"];

for (let index = 0; index < myFriends.length; index++) {
  if (myFriends[index] === "Yamada") {
    break; // [A]へ
  }
  console.log(myFriends[index]); // "Tanaka","Suzuki"  まで表示
}
// [A]
```

> その他 `while` や `array.forEach()` など様々なループ処理がある。  
> [ループと反復処理](https://jsprimer.net/basic/loop/)
