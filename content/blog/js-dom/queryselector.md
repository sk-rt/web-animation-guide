---
title: DOM - 要素の取得・操作
date: "2019-03-02"
excerpt: " querySelector() / querySelectorAll() と要素の操作"
tags: ["DOM"]
featuredImage: ""
exercises: [{ file: "dom-basic.zip", title: "DOMの操作基礎" }]
---

# DOM を取得・操作できるまで

ページ読み込んだ瞬間は DOM ツリー の準備ができていないので要素を取得できない。  
DOM を取得・操作する時は以下の`DOMContentLoaded`イベントの中に書く様にする。

＊現時点ではお約束の様なものとしておく。 イベントや `addEventListener()`については後述する。

```js
document.addEventListener("DOMContentLoaded", function() {
  // この中に書く
});
```

＊これより以下のコードサンプルでは省略するが、実際のコードは上記の中に書くこと。

# 要素の取得

## querySelector()

`document.querySelector(セレクタ)`  
`document` からセレクタに一致する Html 要素を*一つ取得*する。

セレクタは [CSS セレクタ](https://web-d.netlify.com/css-selector/)と同じ記法。

```js
// classが `main-title` の要素を取得する。 ex <h1 class="main-title">
const mainTitle = document.querySelector(".main-title");

// idが `header` の要素を取得する。
const header = document.querySelector("#header");
```

## querySelectorAll()

`document.querySelectorAll(セレクタ)`  
`document` からセレクタに一致する Html 要素を*全て取得*する。  
＊返り値は **_配列_** になっているので注意。

```js
// 全ての<a>タグ要素を全て取得する。
const anchors = document.querySelectorAll("a");

// classが `item` の要素を全て取得する。
const items = document.querySelectorAll(".item");
```

# 要素の操作

## Element オブジェクト

querySelector で取得した要素は `オブジェクト`になっている。  
タグの種類などによって違いはあるが、同じ様なプロパティになっている。  
＊参考: [Element](https://developer.mozilla.org/ja/docs/Web/API/Element)

```js
// <h1>タグの要素を1つ取得する。
const mainTitle = document.querySelector("h1");
// consoleに`mainTitle`の全てのプロパティを表示 ⚠`.log()`でなく`.dir()`
console.dir(mainTitle);
/* 
▽　mainTitle {
        accessKey: "",
        align: "",
        assignedSlot: null,
        attributeStyleMap: StylePropertyMap {size: 0},
        attributes: NamedNodeMap {length: 0},
        autocapitalize: "",
        baseURI: "https://developer.mozilla.org/ja/docs/Web/API/HTMLElement",
        childElementCount: 0,
        childNodes: NodeList [text],
        children: HTMLCollection [],
        clientHeight: 45,
        clientLeft: 0,
        clientTop: 0,
        clientWidth: 312,
        ....
    }
*/
```

## querySelectorAll での要素の取り出し

```js
// classが `item` の要素を全て取得する。
const items = document.querySelectorAll(".item");

// For文で要素を一つずつ取り出し
for (let index = 0; index < items.length; index++) {
  const item = items[index];
}
```

## Element の代表的なプロパティ / メソッド

### element.classList

element に class を追加・削除する。

```js
const myElement = document.querySelector("#my-element");

// 要素に `my-class` classを追加
myElement.classList.add("my-class"); // <div id="#my-element" class="my-class">要素</div>

// 要素に `my-class` classを削除
myElement.classList.remove("my-class");
```

### element.style

element の style を変更する。

```js
myElement.style.color("#000");
myElement.style.fontSize("20px");
```

### element.innerHTML

element の 中身を取得・変更する。

```js
//  中身を取得して `content` に代入
const content = myElement.innerHTML;

// 中身を置き換え
myElement.innerHTML = "中身です。";
```
