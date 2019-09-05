---
title: ボックスモデル
date: "2019-01-30"
excerpt: 要素のサイズや余白などの指定
tags: [CSS]
featuredImage: featured-css.png
samples: [{ file: "css/box-model.zip", title: "ボックスモデル演習" }]
---

#要素のサイズ・余白の指定
すべての要素は、ボックスと呼ばれる領域を持っていて、ボックスは以下のスタイルで決定する。

- 要素の幅・高さ `width` / `height`
- 内側の余白 `padding`
- 枠線 `border`
- 外側の余白 `margin`

![ボックス](./box-model.png)

## width / height (幅 / 高さ)

- 要素の幅・高さを指定する。
- ブロック要素のみ。インライン要素には指定できない。
- 単位には `px` `%` `vw` `em` などが使用可能。（%の場合は**親要素のサイズ**が基準）
- 指定がない場合、width は親要素の内側一杯に広がり、height は要素の中身の高さになる。

## margin (外側の余白)

- 要素同士のスキマ（外側の余白）を上下左右指定する。
- 単位には `px` `%` `vw` `em` などが使用可能。（%の場合は**親要素の幅**が基準）
- **左右に `auto` を指定すると要素を中央にできる。**
- `margin-top` `margin-right` `margin-bottom` `margin-left` で上下左右を個別に設定できる。
- マイナスの値を指定することも可能。
- 上下（垂直）の要素同士のマージンには[マージンの相殺](https://coliss.com/articles/build-websites/operation/css/about-collapsing-margins.html)が起こるので注意。

#### 値の指定方法

- 値を 1 つ指定 → `margin: 10px` **[上下左右]すべて**に 10px マージンを指定。
- 値を 2 つ指定 → `margin: 10px 20px`記述した順に **[上下]** **[左右]** のマージンになる。
- 値を 3 つ指定 → `margin: 10px 20px 10px`記述した順に **[上]** **[左右]** **[下]** のマージンになる。
- 値を 4 つ指定 → `margin: 10px 5px 0px 8px`記述した順に **[上][右][下][左]** のマージンになる。

## padding (内側の余白)

- 要素の内側の余白を上下左右指定する。
- 単位には `px` `%` `vw` `em` などが使用可能。（%の場合は**親要素の幅**が基準）
- margin と同じく`padding-top` `padding-right` `padding-bottom` `padding-left` で上下左右を個別に設定できる。
- 値の指定方法は margin と同じ。（ただしマイナスの値や auto は不可）

# ボックスモデルの例

<iframe height="600" style="width: 100%;" scrolling="no" title="Box Model" src="//codepen.io/RsakaiForEducation/embed/MRpbqP/?height=265&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/MRpbqP/'>Box Model</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
