---
title: CSSアニメーション 2 - transform
date: "2019-03-02"
excerpt: " transformを使った要素の変形"
tags: [CSS]
featuredImage: featured-css-animation.png
samples:
  [
    { file: "css/transition.zip", title: "Transition演習" },
    { file: "css/type-switcher.zip", title: "スイッチアニメーション" },
  ]
---

#transform プロパティ

transform は要素を変形させるプロパティ。  
変形には`移動` `回転` `伸縮` `傾斜` がある。  
<small>＊アニメーションのみに使われる訳ではないが、アニメーションとの相性が良いのでこの項で説明する。</small>

## 指定方法

```css
transform: translate(40px, 10px);
transform: translate(50%, -20%) rotate(250deg); /*（複数の場合は半角スペース空き）*/
```

| 主な値               |                                                                               |
| :------------------- | ----------------------------------------------------------------------------- |
| **`translate(X,Y)`** | **移動**( `X,Y` に移動する値を指定) <br>(例)`transition: translate(10px,0px)` |
| **`rotate(deg)`**    | **回転**( 単位は`deg`＊角度) <br>(例)`transition: rotate(180deg)`             |
| **`scale(X,Y)`**     | **伸縮**( 1 を基準にした伸縮度を指定) <br>(例)`transition: scale(2,1.5)`      |
| **`skew(X,Y)`**      | **傾斜(歪み)** ( 単位は`deg`＊角度)<br>(例)`transition: skew(10deg,20deg)`    |

## サンプル

<iframe height="550" style="width: 100%;" scrolling="no" title="transform" src="//codepen.io/RsakaiForEducation/embed/RmrZOX/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/RmrZOX/'>transform</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### transform-origin （変形の起点）

`transform` プロパティと合わせて使用して要素内の変形の基点を指定する。  
`transform-origin: X軸の位置,Y軸の位置`  
初期値(指定しない場合)は `50% 50%`（要素の中心）

<iframe height="400" style="width: 100%;" scrolling="no" title="transform origin" src="//codepen.io/RsakaiForEducation/embed/EzWRzZ/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/EzWRzZ/'>transform origin</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 組み合わせ

複数の値を組み合わせることもできる。

<iframe height="400" style="width: 100%;" scrolling="no" title="transform mix" src="//codepen.io/RsakaiForEducation/embed/WBrZGO/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/WBrZGO/'>transform mix</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### 3D transform

3D で奥行きを表現することもできる。  
その場合は transform させたい要素の親要素に `transform-style: preserve-3d;` と `perspective: 奥行き;`を追加する。

<iframe height="600" style="width: 100%;" scrolling="no" title="transform 3D" src="//codepen.io/RsakaiForEducation/embed/byqjVP/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/byqjVP/'>transform 3D</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

詳しくは以下など。

> **transform 参考**  
> [【CSS3】Transform（変形）関連のまとめ](https://qiita.com/7968/items/eddfeb4b424d7c2d2d34)  
> [CSS Transform Functions Visualizer](https://css-transform.moro.es/)  
> [Intro to CSS 3D transforms](https://3dtransforms.desandro.com/)
