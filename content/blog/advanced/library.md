---
title: ライブラリ
date: "2021-05-01"
excerpt: "外部ライブラリの紹介や使用方法について"
tags: ["応用"]
featuredImage: ""
exercises: [{ title: "", file: "" }]
draft: false
---

# JavaScript ライブラリとは？

JavaScript で書かれた、ある機能などを簡単に使えるようにまとめたもの。  
世界中の人や企業が色んなライブラリを公開してくれている。  
＊CSS のみの CSS ライブラリもある。

- [Searchlibs ＊"animation"で検索](http://searchlibs.com/?q=animation)
- [Javascripting](https://www.javascripting.com/)

# ライブラリの使用方法

ライブラリの公式サイトや、github 等に書かれているドキュメントを確認すること。  
大抵は `Get started` 、`Instalation` , `Setup` などの項目に導入方法が書かれている事が多い。

＊ただ、ほとんどのライブラリは英語のドキュメントのみとなっているので、苦手な人は自動翻訳などを利用するか、Google 検索すると有名なものは日本人が使用例などの記事を上げている事が多いので参考にする良い。

## 導入例

スライダーライブラリの[Glide](https://glidejs.com/)を例に進める。  
[導入方法](https://glidejs.com/docs/setup/) を見ると　**NPM**、**Download**、**CDN** の 3 つの方法がある。

### 1. NPM

Node Package Manager。JavaScript（Node.js）で使うパッケージ管理ツール。  
制作の現場では必須のものではあるが、別途 Node.js のインストールが必要だったり、Commonjs や ESModule などのモジュール知識、Webpack/Babel などのビルドの知識など... 使うには難易度が高いので割愛する。

### 2. ダウンロードして使用

ライブラリファイルをダウンロードして使用する方法。（Self hosting）

1.  ライブラリの最終版をダウンロード
2.  `dist/glide.min.js`、`dist/css/glide.core.min.css` を使用したいプロジェクトにコピー
3.  html の`<head>` で読みこみ  
    ＊必ず、*自分の JS より上*に記述すること。

```html
<!-- glide.min.js 読み込み -->
<script src="js/glide.min.js" defer></script>

<!-- 自分のJSファイルはライブラリより後に読み込み -->
<script src="js/main.js" defer></script>

<!-- 必須CSSファイルの読み込み ＊CSSは順序は気にしなくて良い -->
<link rel="stylesheet" href="css/glide.core.min.css" />
<!-- glideのデフォルトの見た目である、テーマCSSの読み込み。自分でスタイリングするなら不要 -->
<link rel="stylesheet" href="css/glide.theme.min.css" />
```

### 3. CDN で使用

CDN とは`コンテンツデリバリネットワーク`の略。自分でダウンロード・設置しなくてもネット経由で利用できる。  
大抵の場合は自分でダウンロードするより高速なので、CDN で配信されていればこちらを使用する方が良い。

```html
<!-- CDNから 読み込み -->
<script src="https://unpkg.com/@glidejs/glide/dist/glide.min.js" defer></script>

<script src="js/main.js" defer></script>
<!-- 必須CSSファイルの読み込み  -->
<link rel="stylesheet" href="https://unpkg.com/@glidejs/glide/dist/css/glide.core.min.css" />
<!-- テーマCSSの読み込み -->
<link rel="stylesheet" href="https://unpkg.com/@glidejs/glide/dist/css/glide.theme.min.css" />
```

### ライブラリを使用

上記の`glide.js`を読みこむと、window に関数 `Glide()` が追加される。  
＊どんな変数・関数が使用できるかはライブラリによっても違うのでドキュメントを読んで使用すること。

#### 1. HTML にスライドのマークアップを追加

```html
<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">
        スライド1
        <!-- ここに画像などを読み込む -->
      </li>
      <li class="glide__slide">
        スライド2
        <!-- ここに画像などを読み込む -->
      </li>
      <li class="glide__slide">
        スライド3
        <!-- ここに画像などを読み込む -->
      </li>
    </ul>
  </div>
</div>
```

左右のボタンやバレット（●●●）が必要な場合は HTML に追加する。

```html
<div class="glide">
  <div class="glide__track" data-glide-el="track">
    <ul class="glide__slides">
      <li class="glide__slide">スライド1</li>
      <li class="glide__slide">スライド2</li>
      <li class="glide__slide">スライド3</li>
    </ul>
  </div>
  <!-- バレット（●のナビゲーション） -->
  <div class="glide__bullets" data-glide-el="controls[nav]">
    <button class="glide__bullet" data-glide-dir="=0"></button>
    <button class="glide__bullet" data-glide-dir="=1"></button>
    <button class="glide__bullet" data-glide-dir="=2"></button>
  </div>
  <!-- Arrow（左右のボタンのボタン） -->
  <div class="glide__arrows" data-glide-el="controls">
    <button class="glide__arrow glide__arrow--left" data-glide-dir="<">prev</button>
    <button class="glide__arrow glide__arrow--right" data-glide-dir=">">next</button>
  </div>
</div>
```

#### 2. Glide.js の初期化

スライダーを起動する。  
詳細なオプションは[公式ドキュメント](https://glidejs.com/docs/options/)を参考。

```js
// main.js
new Glide(".glide").mount();
```

<iframe width="100%" height="430" src="//jsfiddle.net/sk_rt/8jk67s0z/embedded/result,js,html,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

# UI 系ライブラリ紹介

### DOM アニメーション系

- [GSAP](https://greensock.com/gsap/)  
  高機能・高速アニメーションライブラリ。canvas / webgl でも使用できる。また多くの Gsap プラグインがある。
- [Anime.js](https://animejs.com/)  
  高機能 DOM アニメーションライブラリ。
- [Lottie](https://airbnb.io/lottie/#/)  
  After Effect で作ったアニメーションを SVG で再生できる。After Effect のプラグイン `Bodymovin` を使用して、json ファイルでアニメーションを書き出し、lottie で読み込み使用する。

### スライダー/カルーセル系

- [Swiper](https://swiperjs.com/)  
  高機能スライダー
- [Glide.js](https://glidejs.com/)  
  軽量でモダンなスライダー

### モーダル・画像ポップアップ系

- [LigntBox](https://lokeshdhakar.com/projects/lightbox2/)  
  大昔からある画像のポップアップライブラリ(要 jQuery)

- [fancybox](http://fancyapps.com/fancybox/3/)  
  昔からある画像のポップアップライブラリ(要 jQuery)

- [lightgallery.js](https://sachinchoolur.github.io/lightgallery.js/)
  軽量のポップアップライブラリ

### スクロール連動系

- [AOS](https://michalsnik.github.io/aos/)  
  スクロールに応じたアニメーションが簡単に設定できる。
- [ScrollReveal](https://scrollrevealjs.org/)  
   AOS よりはやや難しいがスクロールアニメーションの定番ライブラリ。
- [Sal.js](https://mciastek.github.io/sal/)
- [ScrollTriger](https://greensock.com/scrolltrigger/)
  上記の GSAP 用のプラグイン。より高機能なスクロールアニメーションが制作できる。

### Canvas/WebGL/SVG チャート 系

- [Three.js](https://threejs.org/)  
  3D WebGL ライブラリ
- [PixiJS](https://www.pixijs.com/)  
  2D WebGL ライブラリ
- [D3.js](https://d3js.org/)  
  データビジュアライザ

### [番外] SPA フレームワーク

UI を構築するための流行のフレームワーク。  
もし Web アプリケーションなどを作りたかったり、Web 系に就職したいならぜひ。

- [React](https://ja.reactjs.org/)
- [Vue.js](https://jp.vuejs.org/)

### jQuery について

一世風靡したライブラリで、今も多くのサイトで使用されている。  
DOM の扱いや、イベント・アニメーション処理などを`$`から始まる独自の記法で簡潔に書け、ブラウザの種類による API の違いやバグなどを吸収してくれるメリットがある。  
また、jQuery を拡張したライブラリ（JQuery プラグイン）も多数存在する。

標準　: `document.querySelector(".el").classList.add("on")`  
jQuery: `$(".el").addClass("on")`

- あまりに普及したので Web 系の記事では jQuery を使用する前提で書かれていることもあるので注意( `$`がでてきたらほとんど jQuery)
- 現在では jQuery に頼らずに Web を構築することが可能で下火になっており、JavaScript の標準の書き方と違う書き方を覚える必要があるので、_*今からあえて覚える必要は無い*_。
- [jQuery](https://jquery.com/) 公式サイト
- [You Don't Need jQuery](https://qiita.com/tatesuke/items/b9548dd484b01b139b74)  
  jQuery はもう必要ないと提案した有名な記事の日本語訳。
- [jQuery とは何なのか？](https://qiita.com/ygkn/items/eed01ae9c01339d6086a)  
   jQuey の歴史を簡単にまとめた記事。
