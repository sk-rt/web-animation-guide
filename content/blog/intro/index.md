---
title: Webアニメーション
date: "2019-01-01"
excerpt: "アニメーションの手法や実装方法について"
tags: ["イントロ"]
featuredImage: ""
exercises: [{ file: "", title: "" }]
---

# アニメーションの手法

## CSS アニメーション

`transition` や `animation` プロパティを使って、[CSS のみでアニメーション](https://web-d.netlify.app/animation-transition/)できる。比較的簡単に実装できるが、複雑なアニメーションは難しい。  
また、`:hover`,`:active` などを除いて、**ユーザーのアクションを取得できない**。（マウスイベント、タッチイベント、スクロールイベント、フォームイベントなど）

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/afvyxp1t/embedded/result,html,css,/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## JavaScript を使ったアニメーション

CSS アニメーションと組み合わせたり、style を連続して変更する事で HTML 要素をアニメーションさせる。  
クリックやスクロールなどのユーザーインタラクションやセンサーなどのユーザー環境などを取得して**インタラクティブなアニメーション**が可能。

また、標準のアニメーション機能 [Web Animation API](https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
や目的に応じた豊富な JavaScript ライブラリがある。

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/q35f8z6o/embedded/result,html,js,css/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## その他

### Canvas / WebGL

DOM(HTML 要素)を変更するのではなく `<canvas>` 要素に JavaScript でグラフィックスを描画する。
かつての Flash の様な自由でインタラクティブな表現や 3D 表現も可能。

- [HTML5 で作る Canvas アニメーションの基礎](https://www.webopixel.net/javascript/1001.html)
- [WebGL 入門 - ics.media](https://ics.media/entry/2328/)

### video やアニメ Gif など

`<video>`タグで mp4 などの動画が埋め込める。また、JavaScript でシークや再生・ストップなど操作をできるので工夫次第では面白いものができるかも。

- [JavaScript で動画再生を操作する
  ](https://qiita.com/iiishokoiii/items/3037d6d01248502aee68)
