---
title: 応用 - ライブラリ
date: "2019-04-04"
excerpt: "外部ライブラリの使用方法"
tags: ["応用"]
featuredImage: ""
exercises: [{ title: "アニメーションライブラリ演習", file: "animation-by-library.zip" }]
---

# JavaScript ライブラリとは？

JavaScript で書かれた、ある機能などを簡単に使えるようにまとめたもの。  
世界中の人や企業が色んなライブラリを公開してくれている。

- [Searchlibs ＊"animation"で検索](http://searchlibs.com/?q=animation)
- [Javascripting](https://www.javascripting.com/)

# 導入方法

アニメーションライブラリの[anime.js](https://animejs.com/)を例に進めます。

### ダウンロードして使用

1.  [ライブラリをダウンロード](https://github.com/juliangarnier/anime/)
2.  `anime.min.js` を使用したいプロジェクトにコピー
3.  html で読みこみ  
    ＊必ず、*自分の JS より上*に記述すること。

```html
<!-- anime.min.js 読み込み -->
<script src="js/anime.min.js"></script>

<!-- 自分のJSファイルはライブラリより後に読み込み -->
<script src="js/main.js"></script>
```

### CDN で使用

＊ CDN とは`コンテンツデリバリネットワーク`の略。自分でダウンロード・設置しなくてもネット経由で利用できる。

```html
<!-- CDNから 読み込み -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.2.0/anime.min.js"></script>

<script src="js/main.js"></script>
```

> 【⚠️ 注意】  
> ライブラリによっては複数の JS ファイルを読み込んだり、CSS の読み込みが必要な場合がある。

# ライブラリを使用

上記の`anime.js`を読みこむと、window に関数 `anime()` が追加される。  
＊どんな変数・関数が使用できるかはライブラリによっても違うのでドキュメントを読んで使用すること。

```js
// `.element`要素をアニメーション。
anime({
  targets: ".element",
  left: "240px",
  backgroundColor: "#FFF",
  duration: 3000,
  easing: "easeInOutQuad"
});
```

# UI 系ライブラリ紹介

### DOM アニメーション系

- [tweenMax(gsap)](https://greensock.com/tweenmax/)  
  高機能・高速アニメーションライブラリ
- [web-animation-js](https://github.com/web-animations/web-animations-js)  
   ブラウザ標準で使える(まだ Chrome/Firefox 限定) Web Animation API の Polyfil  
   参考: [Web Animations API を使ってみる](https://qiita.com/mizchi/items/4def48e2467ae2b04da3)

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
  スクロールに応じてアニメーション
- [Sal.js](https://mciastek.github.io/sal/)

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

---

> #### jQuery について
>
> 一世風靡したライブラリで、今も多くのサイトで使用されている。  
> DOM の扱いや、イベント・アニメーション処理などを`$`から始まる独自の記法で簡潔に書ける。  
> また、ブラウザの種類による API の違いやバグなどを吸収してくれる。
>
> 標準　: `document.querySelector(".el").classList.add("on")`  
> jQuery: `$(".el").addClass("on")`
>
> - あまりに普及したので Web 系の記事では jQuery を使用する前提で書かれていることもあるので注意( `$`がでてきたらほとんど jQuery)
> - 現在では jQuery に頼らずに Web を構築することが可能で、JavaScript の標準の書き方と違う書き方を覚える必要があるので、_この講義では jQuery は扱かわない_。
> - [jQuery](https://jquery.com/) 公式サイト
> - [You Don't Need jQuery](https://qiita.com/tatesuke/items/b9548dd484b01b139b74)  
>   jQuery はもう必要ないと提案した有名な記事の日本語訳。
> - [jQuery とは何なのか？](https://qiita.com/ygkn/items/eed01ae9c01339d6086a)  
>    jQuey の歴史を簡単にまとめた記事。
