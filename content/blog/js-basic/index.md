---
title: JS 基礎 - JSファイルの作成
date: "2019-01-30"
excerpt: "JSファイルの作成やブラウザでの確認"
tags: ["基礎"]
featuredImage: ""
exercises: []
---

# JS ファイルの作成・読み込み

JavaScript は拡張子 `.js` をつけて保存する。  
保存した js ファイルを HTML から読みこむと、内容のスクリプトが 1 度だけ実行される。

```directory
myApp
├── index.html
└── js
    └── main.js
```

```js
// main.js として保存
// アラート「Hello, JS」と表示される
alert("Hello, JS");
```

```html
<!-- <head>内でmain.jsを読みこみ -->
<script src="./js/main.js"></script>
```

# ブラウザでの確認方法と Console API

Chrome で`表示=>開発/管理`からデベロッパーツールを起動する。(`option + ⌘ + i`)  
エラーなどが発生するとデベロッパーツールの `console` に表示される。

また、JavaScript の任意の場所に `console.log(値)` を入れると上記の `console`　に表示させることができる。

JS で開発するのには必須なので _作業中は常にデベロッパーツール表示させる様にすること。_

```js
// `console` にログを出力
console.log("Hello, JS");
```
