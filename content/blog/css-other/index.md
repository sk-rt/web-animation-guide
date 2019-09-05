---
title: その他のプロパティ
date: "2019-04-10"
excerpt: "opacity,box-shadow,グラデーションなど装飾系のCSSプロパティ"
tags: [CSS]
featuredImage: featured-css.png
samples: []
---

<!--
- [透明度(opacity)](#%E9%80%8F%E6%98%8E%E5%BA%A6opacity)
- [影 (box-shadow / text-shadow)](#%E5%BD%B1box-shadow--text-shadow)
- [グラデーション(linear-gradient)](#%E3%82%B0%E3%83%A9%E3%83%87%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3linear-gradient)
- [効果(filter)](#%E5%8A%B9%E6%9E%9Cfilter) -->

# 透明度(opacity)

- opacity は要素の**_透明度_**を設定できるプロパティ。
- 初期値は `1` で、`0〜1` の値を設定できる。0 に設定すると完全に透明になる。
- 記法は `opacity: 透明度`
- アニメーション可

```css
.op {
  opacity: 0.3;
}
```

# 影(box-shadow / text-shadow)

### box-shadow

- **_要素に影をつける_**プロパティ。
- 記法は `box-shadow: [X軸の位置][y軸の位置] [ぼかしサイズ] [影の広がり] [影の色][内側 (inset)]`
- X 軸は右、Y 軸は下への影の位置。マイナスの値も指定可能。
- [ぼかしサイズ]、[影の広がり]、[影の色]は省略可能。
- 内側の影にするときは最後に `inset` をつける
- アニメーション可

```css
.box-shadow {
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.4);
}
```

<iframe height="600" style="width: 100%;" scrolling="no" title="Box Shadow" src="//codepen.io/RsakaiForEducation/embed/KLQqYR/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/KLQqYR/'>Box Shadow</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### text-shadow

- **_テキストに影をつける_**プロパティ。
- 基本的に `box-shadow` と同じだが、内側の影と影の広がりは指定できない。
- アニメーション可

```css
.text-shadow {
  text-shadow: 10px 10px 10px rgba(0, 0, 0, 0.4);
}
```

> 参考  
> [CSS generator / box-shadow](https://css-generator.net/box-shadow/)  
> [CSS generator / text-shadow](https://css-generator.net/text-shadow/)

# グラデーション(linear-gradient)

- **_背景にグラデーション_**を設定できる。
- 基本的な記法は `background-image: linear-gradient(角度, 開始色, 終了色);`
- 円形のグラデーションは`radial-gradient()`
- **_アニメーション不可_**

```css
.gradient {
  background-image: linear-gradient(45deg, #ff0000, #00ffff);
}
```

<iframe height="600" style="width: 100%;" scrolling="no" title="Gradient " src="//codepen.io/RsakaiForEducation/embed/WBMEjK/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/WBMEjK/'>Gradient </a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> 参考  
> [WebGradients](https://webgradients.com/)  
> [Generate a CSS Color Gradient](https://mycolor.space/gradient)

# 効果(filter)

- 要素にぼかし、カラー変換などの効果を与えることができる。
- 画像(img や background)にも適用できる。
- 代表的な値(`0`には好きな値を入れる)
  - `blur( 0px )` ぼかし
  - `brightness( 0% )` 明るさ
  - `saturate( 0% )` 彩度
  - `hue-rotate( 0deg )` 色相回転
- アニメーション可

```css
.filter-blur {
  filter: blur(30px);
}
.filter-brightness {
  filter: brightness(100%);
}
```

<iframe height="700" style="width: 100%;" scrolling="no" title="CSS Filters" src="//codepen.io/RsakaiForEducation/embed/VONxRj/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/VONxRj/'>CSS Filters</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

> 参考  
> [Photoshop はもういらない？明度も彩度も超手軽に変えられる CSS フィルターがスゴい](https://www.webprofessional.jp/css-filter-effects-blur-grayscale-brightness-and-more-in-css/)  
> [CSSFilterGenerator.com](http://www.cssfiltergenerator.com/)
