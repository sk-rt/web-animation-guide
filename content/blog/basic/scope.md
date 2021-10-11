---
title: 変数のスコープ
date: "2021-02-06"
excerpt: "関数やif文などが作るスコープの概念について"
tags: ["基礎"]
featuredImage: ""
exercises: []
draft: false
---

# スコープとは

スコープとは変数を参照できる範囲を決めるもの。  
異なるスコープにある変数はお互いに参照できない。

```js
function myFunction1() {
  const localVal = "myFunction1のローカル変数";
}
// 関数スコープの外では関数内で宣言した変数にアクセスできない。
console.log(localVal); // => Error
```

## スコープの種類

関数や if 文、for 文などがスコープを生成する。(`{}`で囲まれた部分がスコープ)  
スコープの生成されていない部分を _グローバルスコープ_、  
関数などで生成されたスコープを _ローカルスコープ_ と言う。

スコープの*中から外の変数は参照可能*だが、_外のスコープからスコープ内の変数は参照できない_。

![スコープ](./js-scope.png?v=0)

上記の図の例では

- グローバルスコープでは変数 B,C,D,E を参照できない。
- ローカルスコープ内では*他のスコープの変数を参照できない*。（ローカルスコープ 1 内では変数 C,D,E を参照できない）
- ローカルスコープ内でもグローバルスコープで宣言された _変数 A は参照できる_ 。
- ローカルスコープ 1 内で変数 C は参照できない。
- ローカルスコープ 2 内では変数 A,B は参照できる。

```js
const a = "グローバル変数";

function foo(arg) {
  const b = "関数スコープ";
  // グローバルスコープで宣言された変数は参照可能
  console.log(a);

  if (arg) {
    const c = "関数スコープ内のローカルスコープ";
  }

  // if文スコープの変数にはアクセスできない
  console.log(c); // => Error
}
foo(true);
console.log(b); // => Error

/* if文、for文でも同様にスコープを生成する */
if (true) {
  const d = "ブロックスコープ";
}
for (let index = 0; index < 10; index++) {
  const c = "ブロックスコープ" + index;
  console.log(d); // => Error
}
console.log(c); // => Error
```

## スコープの変数名

同一スコープ内では同じ名前の変数宣言はできないが、スコープが違う場合は宣言可能。

```js
const x = "グローバル";

function (){
    const x = "ローカル";
    console.log(x) // => "ローカル"
}

console.log(x) // => "グローバル"
```

# 異なるスコープ内での共通の変数の利用例

グローバルスコープに変数宣言（グローバル変数と言う）し、関数等で利用する。

```js
/* 関数内でグローバル変数を変更する */

let count = 0;

function countUp() {
  count++; // countに +1
}
console.log(count); // => 0
countUp();
console.log(count); // => 1
countUp();
console.log(count); // => 2
```

```js
/* if文で変数の値を変更する */

function getNumberType(number) {
  let type = "その他";
  if (number % 2 === 0) {
    type = "偶数";
  }
  if (number % 2 === 1) {
    type = "奇数";
  }
  return type;
}
console.log(getNumberType(10)); // => "偶数"
console.log(getNumberType(5)); // => "奇数"
console.log(getNumberType(1.23)); // => "その他"
```
