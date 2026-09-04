---
title: インタラクションとアニメーション
date: "2019-01-01"
excerpt: "アニメーションの手法や実装方法について"
tags: ["イントロ"]
featuredImage: ""
exercises: [{ file: "", title: "" }]
---

# インタラクションについて

インタラクションとは、ユーザーの行動（**アクション**） とシステムの反応（**リアクション**）のこと。  
クリック、スクロール、ホバー、タップ、スワイプ、ページ遷移、ジャイロセンサーなど、Web UI 上で行う操作はすべてインタラクションの起点である。

ユーザーのアクションに対して適切なリアクションを返すことで、ユーザーの理解を助けたり、感情に働きかけたりすることができる。

# アニメーションの技術

## CSS アニメーション

HTML 要素のスタイルを滑らかに変化させることで動きを見せるアニメーション。  
CSS の `transition` や `animation` プロパティが最も手軽。  
（詳細は [CSS アニメーション](https://web-d.netlify.app/animation-transition/)）

ただし、CSS のみで検知できるユーザーアクションは限定的。  
`:hover`,`:active` `:checked` などの擬似クラス系に加え、スクロール量と連動できる `Scroll-driven Animations` やページ遷移時に発火する `View Transition` などがある。  
`クリック` などを検知するには JavaScript を用いる必要がある。

<iframe width="100%" height="300" src="//jsfiddle.net/sk_rt/afvyxp1t/embedded/result,html,css,/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>

## JavaScript を使ったインタラクション

`イベント` という仕組みで様々なユーザーアクションを検知できる。

また、標準のアニメーション機能 [Web Animation API](https://developer.mozilla.org/ja/docs/Web/API/Web_Animations_API/Using_the_Web_Animations_API)
や目的に応じた豊富な JavaScript ライブラリ（例: [GSAP](https://ics.media/entry/220822/)）があり、CSS のみでは難しい複雑なアニメーションも作成できる。

<iframe width="100%" height="400" src="//jsfiddle.net/sk_rt/q35f8z6o/200/embedded/result,js,html,css/dark/" frameborder="0" loading="lazy" allowtransparency="true" allowfullscreen="true"></iframe>

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
