---
title: CSS セレクタ
date: "2019-01-31"
excerpt: "スタイルする対象の要素を指定する、セレクタについて"
tags: [CSS]
featuredImage: featured-css.png
samples: []
---

# セレクタとは

スタイルを適用する対象を指定する記法。  
擬似クラスなども含めると[多様な記述](http://www.htmq.com/csskihon/005.shtml)が可能。  
以下に代表的なものを紹介する。

## 要素型セレクタ

`要素名`
HTML 要素名で対象を指定する。

```css
/*<body>要素 */
body {
  color: #f00;
}
/* 全ての<div>要素 */
div {
  color: #f00;
}
```

## class セレクタ `.`

ある class が指定されている要素を`.クラス名`指定する。

```css
/* <tag class="test"> の要素 */
.test {
  color: #f00;
}
```

## id セレクタ `#`

ある id が指定されている要素を`＃クラス名`指定する。  
＊同名の id は HTML 内に 1 度しか使用不可なので注意。  
＊通常は使用せず、class で指定すること。

```css
/* <tag id="test"> の要素 */
＃test {
  color: #f00;
}
```

## 子孫セレクタ `A B`

セレクタを**半角スペース**で区切ると、ある要素の子孫要素を指定できる。

```css
/* classが"test"の要素の中にある、div要素 */
.test div {
  color: #f00;
}
/* classが”hoge”の要素の中にある、classが"fuga"の要素 */
.hoge .fuga {
  color: #f00;
}
```

## 複数セレクタ `AB`

セレクタをスペースなしで複数記入すると、`セレクタA かつ セレクタB の要素`となる。  
＊要素型セレクタは必ず一番前に記述。

```css
/* classが"test"のdiv要素 */
div.test {
  color: #f00;
}
/* "hoge"と"fuga"がclassに指定されている要素 */
.hoge.fuga {
  color: #f00;
}
```

## 擬似クラス `:`

単体セレクタでは表現できないものを選択できるよう導入されたもの。
`:擬似クラス名` で指定できる。

#### `:hover` カーソルが乗っている要素

```css
.test:hover {
  color: #f00;
}
```

#### `:active` クリック中の要素

```css
.test:active {
  color: #f00;
}
```

#### `:nth-child(n)` n 番目の兄弟要素

```html
<ul class="list">
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

```css
/* 3番目のli要素 */
.list li:nth-child(3) {
  color: #f00;
}
```

---

> **参考**
>
> - [CSS のセレクタとは？覚えておきたい 25 種類と書き方](https://saruwakakun.com/html-css/reference/selector)
> - [CSS セレクタのチートシート](https://webliker.info/css-selector-cheat-sheet/)

# 詳細度

セレクタには詳細度という概念があり、詳細度が高いほどそのスタイルが**_優先される_**。  
＊詳細度が同じ場合は後に記述した方が優先される。

大まかな詳細度は以下の数字を足すと計算できる。（＊[実際少し違う](https://qiita.com/izumin5210/items/8ae78cb4f4bd325bccb4#%E3%82%88%E3%81%8F%E3%81%82%E3%82%8B%E5%8B%98%E9%81%95%E3%81%84)）

- **ID セレクタ(#)** => `100点`
- **Class セレクタ(.)** => `10点`
- **要素型セレクタ** => `1点`

### 例 1

```html
<div id="hoge" class="fuga">
  何色？
</div>
```

```css
/* 詳細度: 100点 */
#hoge {
  color: #f00; /* ⬅︎ この色 */
}
/* 詳細度: 10点 */
.fuga {
  color: #00f;
}
/* 詳細度: 1点 */
div {
  color: #0f0;
}
```

### 例 2

```html
<div class="hoge">
  <div class="fuga">
    何色？
  </div>
</div>
```

```css
/* 詳細度: 10点 */
.fuga {
  color: #f00;
}
/* 詳細度: 11点 */
div.fuga {
  color: #00f;
}
/* 詳細度: 20点 */
.hoge .fuga {
  color: #0f0;
}
/* 詳細度: 21点 */
.hoge div.fuga {
  color: #ffo; /* ⬅︎ この色 */
}
```

---

> **参考**
>
> - [エンジニアはもう一度 CSS とちゃんと向き合ってみよう - 詳細度編](https://qiita.com/izumin5210/items/8ae78cb4f4bd325bccb4)
