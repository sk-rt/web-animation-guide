---
title: 関数とクリックイベント
date: "2021-02-04"
excerpt: "functionでの関数宣言と、addEventListener()でクリックイベント"
tags: ["基礎"]
featuredImage: ""
exercises: [{ file: "js-click-event.zip", title: "クリックイベント" }]
draft: false
---

# 関数とは

![関数](./js-function.png?v=2)

**ある一連の手続きを一つの処理としてまとめるもの。**  
同じ処理を複数使う時や、名前を付けて処理をまとめる時に宣言する。  
また自分で定義した関数以外にも、組み込み関数や、外部ライブラリが定義した関数などが存在する。＊ `alert()` や `console.log()` も組み込み関数。

## 関数宣言 / 呼び出し

関数は `function` キーワードを使って以下の様に宣言できる。  
＊定義しただけでは処理は実行されない。

```js
function myFunction() {
  // 処理
}
```

宣言した関数は `関数名()` で呼び出し実行する事ができる。

```js
myFunction();
```

## 引数と返り値

### 引数

関数には値(_引数_)を渡す事ができる。書き方は `function 関数名(引数1,引数2)`  
設定した引数は関数内で変数として利用できる。  
また、`引数 = xxx` とする事でデフォルトの引数を指定可能。

### 返り値

関数内には一つだけ*返り値*を設定できる。 `return 返り値`。  
関数呼び出し時に変数に代入する事で返り値が取得できる。

```js
// 面積を計算する関数
function getArea(width, height) {
  return width * height;
}

// 呼び出し
const theArea = getArea(100, 10); // => 1000
```

```js
// 消費税込の計算をする関数
// 税率はデフォルトで 0.1
function getPriceInTax(price, tax = 0.1) {
  const result = price + price * tax;
  return result;
}

// 2番目の引数を指定せず呼び出せば 0.1になる。
const priceIntax = getPriceInTax(1000); // => 1100
// 指定すればその値になる。
const priceIntax2 = getPriceInTax(1000, 0.08); // => 1080
```

## メソッド

オブジェクトのメンバーとしての関数を **メソッド**という。  
呼び出しは `オブジェクト名.メソッド名()`。

```js
const myProfile = {
  name: "鈴木 太郎",
  age: 21,
  // メソッド `greeting`
  greeting: function () {
    alert("こんにちは。" + myProfile.name + "です。");
  },
};
// メソッドの呼び出し。
myProfile.greeting();
```

＊例えば `document.querySelector()` は document オブジェクトの `querySelector()`というメソッド。

## 他の関数定義

本サイトでは上記の書き方を基本に行うが、以下の様な宣言方法もあるので注意。  
＊呼び出し方法は上記と同じ。

```js
/* 無名関数 */
function (param) {
  // 処理
}
/* 無名関数を変数に代入 */
const myFunction = function (param) {
  // 処理
};
```

```js
/* アロー関数 */
const myFunction = (param) => {
  // 処理
};
```

- 参考: [アロー関数の基本
  ](https://ja.javascript.info/arrow-functions-basics)

# イベントとは

ボタンをクリックした時、マウスポインターが乗った時、スクロールして一番下まで行った時、等々...  
ページ上の**ユーザーアクションや状態の変化を検知する仕組み。**

_○○○ に、 △△△ が起こったら、 ××× を実行_ という形で命令する。

## 書き方

eventTarget.addEventListener() メソッドを使用する。

```js
イベントの発生源.addEventListener("イベント名", 発生時に実行する関数名);
```

- イベントの発生源(_イベントターゲット_）には DOM エレメント, window, document などがある。
- 発生時に実行する関数を*イベントリスナー*と言う。  
  また、この関数には[イベントオブジェクト](#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%82%AA%E3%83%96%E3%82%B8%E3%82%A7%E3%82%AF%E3%83%88)以外の引数を指定できない。

## イベントの種類と例

「イベント名」には `click`,`load`,`scroll` ,`mousemove` などなど所定のイベントを指定できる。  
イベントターゲットはイベントの種類によって様々なので調べて使うこと。

参考: [ブラウザイベントの紹介](https://ja.javascript.info/introduction-browser-events)

## イベントの削除

追加したイベントの削除は`removeEventListener()` を使う。  
「関数名」には addEventListener で登録した関数名と同じものを指定する。

```js
イベントの発生源.removeEventListener("イベント名", 追加した関数名);
```

# クリックイベント

ある要素をクリックした時(スマホの場合はタッチして離した時)に発生するイベント。  
DOM 要素から発生する。

```js
// classが `alert-button` の要素を取得する。
const alertButton = document.querySelector(".alert-button");

// イベント発生時に呼び出される関数(イベントリスナー)を定義
function showGreeting() {
  alert("こんにちは");
}

// alertButtonが、clickされたら、showGreetingを実行
alertButton.addEventListener("click", showGreeting); // 関数名には `()`をつけない
```

また `addEventListener()` の第 2 引数には無名関数を渡す事もできる。  
＊ただし無名関数を使った場合は removeEventListener でイベントの削除ができない。

```js
const alertButton = document.querySelector(".alert-button");

alertButton.addEventListener("click", function () {
  alert("こんにちは");
});
```

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/s7o0aj82/embedded/result,js,css,html/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

> #### イベントオブジェクト
>
> イベントリスナーの引数には _イベントオブジェクト_ という値が代入される。  
> 発生した要素や、発生した位置や時間など、そのイベントに関する情報が色々と入っている。  
> ＊イベントオブジェクトの中身はイベントの種類や発生した要素(イベントターゲット)によって変わる。
>
> ```js
> const button = document.querySelector(".button");
>
> // 第一引数にイベントオブジェクトが入る。
> function showEventObject(event) {
>   console.log(event);
>   console.log(event.currentTarget); //イベント発生源（イベントターゲット）
>   console.log(event.type); //イベント名
>   console.log(event.pageX); //クリックされたX座標
>   console.log(event.pageY); //クリックされたY座標
> }
> button.addEventListener("click", showEventObject);
> ```
>
> #### event.preventDefault()
>
> `<a>` タグ等にクリックイベントを登録すると、リスナーが実行される前にページ遷移してしまう。（デフォルトの挙動が実行される。）
> リスナーの中で `event.preventDefault()` メソッドを実行すると、それを防ぐ事ができる。
>
> ```js
> const linkButton = document.querySelector("a");
>
> function handleAnchorEvent(event) {
>   event.preventDefault(); // <a>タグをクリックしてもページ遷移しない。
>   // 処理
> }
> linkButton.addEventListener("click", handleAnchorEvent);
> ```
