---
title: データ型と演算子
date: "2021-02-03"
excerpt: "データ型や演算子について"
tags: ["基礎"]
featuredImage: ""
exercises: [{ file: "", title: "" }]
draft: false
---

# データ型

JavaScript で扱う値には文字列や数値などの`データ型`がある。

- 文字列
- 数値
- 真偽値
- null / undefined
- 配列
- オブジェクト
- etc.

## 文字列型(String)

ダブルコーテーション `"`かシングルコーテーション`'`で囲むと文字列になる。

```js
const greeting = "こんにちは";
```

＊バッククオート `` ` `` で囲むと複数行で指定できる。参考: [テンプレートリテラル](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/template_strings)

## 数値型(Number)

整数値や小数点で指定する。

```js
const theInt = 10;
const theFloat = 3.14;
const theNegative = -123456.789;
```

## 真偽値型(Boolean)

`true` か `false`で指定する。

```js
const isStudent = true;
const isMale = false;
```

## null / undefined

`null` は値がないことを表す。  
`undefined` は変数などが定義されていない、という意味。

```js
// 変数宣言だけで代入をしないとnullが入る。
let myAge;
console.log(myAge); // → null

// 存在しない変数名などにアクセスするとundefinedになる。
const myName = "Taro";
console.log(myNameee); // → undefined

// querySelector()などは指定した要素が存在しない場合は nullを返す。
const noElement = document.querySelector(".no-element");
console.log(noElement); // → null
```

## 配列型(Array)

複数の値に順序をつけて格納できる。  
`[]`で囲い、カンマ `,`区切りで値を指定する。

```js
const myFriends = ["Tanaka", "Suzuki", "Yamada", "Saito"];
```

配列は`0` から始まる*インデックス*(順番)で値を保存している。  
各値へアクセスするには `変数名[インデックス]` で対応した値を参照できる。

また、配列の要素数は `変数名.length` で取得できる。

```js
const myFriends = [
  "Tanaka", // 0 番
  "Suzuki", // 1 番
  "Yamada", // 2 番
  "Saito", // 3 番
];
// 0番目の値を取得
const myBestFriend = myFriends[0];
console.log(myBestFriend); // → Tanaka
console.log(myFriends[1]); // → Suzuki

// 配列の数
const myFriendsNumber = myFriends.length;
console.log(myFriendsNumber); // →　4
```

また、配列の値にはあらゆる型が指定できる。

```js
// 数値の配列
const primeNumber = [1, 3, 5, 7, 11, 13, 17, 19];

// 配列の配列
const kanaCharacters = [
  ["ア", "イ", "ウ", "エ", "オ"],
  ["カ", "キ", "ク", "ケ", "コ"],
  ["サ", "シ", "ス", "セ", "ソ"],
];
console.log(kanaCharacters[1][3]); // ケ
```

## オブジェクト型(Object)

オブジェクトは `{}` の中に `key: value` で値を`,`区切りで指定する。  
各 `key: value` をそのオブジェクトの*プロパティ*という。

```js
const myProfile = {
  name: "鈴木 太郎",
  age: 21,
  gender: "男",
  hasLaptop: true,
  friends: ["Tanaka", "Yamada", "Saito"],
};
```

値の取得は `変数名.key` で参照できる。 ＊または`変数名["key"]`

```js
const myProfile = {
  name: "鈴木 太郎",
  age: 21,
  gender: "男",
  hasLaptop: true,
  friends: ["Tanaka", "Yamada", "Saito"],
};
// 変数名.gender でメンバー`gender`を参照
const myGender = myProfile.gender;
console.log(myGender); // 男

// 変数名["key"]でもメンバーにアクセスできる。
console.log(myProfile["friends"]); // ["Tanaka", "Yamada", "Saito"]
```

> #### JavaScript でのオブジェクト
>
> window / document を筆頭に JavaScript ではオブジェクトが頻出する。  
> 例えば querySelector() で取得した element もオブジェクトで、element.style や element.classList はそのプロパティ。
>
> また、文字列や数値もオブジェクトの様に振る舞う。  
> 参考: [https://qiita.com/hcr1s/items/172ba167ba44a35c2a45](https://qiita.com/hcr1s/items/172ba167ba44a35c2a45)
>
> ```js
> // Elementオブジェクトのイメージ
> element = {
>     classList: {
>         add: function(className){ ... },
>         remove: function(className){ ... },
>     },
>     style: {
>         color: '#00000',
>         fontSize: '15px',
>         ...
>     },
>     innerHTML: '<div>xxxx</div>'
>     ....
> }
> // ドット`.` でプロパティにアクセス
> element.style.color = "#FF0000";
>
> ```

# 演算子

四則演算や文字列の結合、比較などを行う。

## プラス演算子（+）

数値、または文字列の足し算を行う。

```js
let myAge = 21 + 1;
console.log(myAge); // 22

// 変数 で足し算もできる。
const yourAge = myAge + 12;
console.log(yourAge); // 34
```

文字列を `+` すると連結される。

```js
const myName = "山田" + "太郎";
console.log(myName); //山田太郎

// 文字列 + 数値だと文字列になる
const myAge = 24 + "10" + "歳";
console.log(myAge); //2410歳
```

## マイナス演算子（-）

数値の引き算(減算) `-`

```js
const yourAge = 30 - 12;
console.log(yourAge); // 18
```

## 乗算演算子（\*）

数値の掛け算(乗算) `*`

```js
const minutesOfYear = 365 * 24 * 60;
console.log(minutesOfYear); // 525600
```

## 除算演算子（/）

数値の割り算（除算）`/`

```js
const myMonney = 10000 / 3;
console.log(myMonney); // 3333.333...
```

## 剰余演算子（%）

数値の割り算のあまり `%`

```js
const donation = 10000 % 3;
console.log(donation); // 1
```

## 比較演算子

左右を比較する演算子。`if文`などで使う。  
比較すると Boolean 型`true / false`を返す。

### 等価演算子(===) / 不等価演算子(!==)

左右の値が同じ値かを比較する。  
逆に `!==` で同じで無いか判定する。

```js
const myAge = 20;
const youreAge = 21;
console.log(myAge === 20); // true
console.log(myAge === youreAge); // false
console.log(myAge !== youreAge); // true
```

### 大なり/小なり演算子 (<)(>)

左右の値の大小を比較する。  
`<`で左が右未満か。
`>`で左が右より大きいか。

```js
const myAge = 20;
const youreAge = 21;
console.log(myAge < youreAge); // false
console.log(myAge > 17); // true
```

また、`<=` で左が右以下、`>=`で左が右以上かを比較する。
