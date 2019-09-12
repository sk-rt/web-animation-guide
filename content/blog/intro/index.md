---
title: Webアニメーション概要
date: "2019-01-01"
excerpt: "Webアニメーションの種類や目的など"
tags: ["イントロ"]
featuredImage: ""
exercises: [{ file: "", title: "" }]
---

# Web におけるアニメーションの役割

## ユーザーアクションに対するリアクションや、UI の補助など

主にユーザービリティを向上させるための説明的なインタラクション。  
**マイクロインタラクション**

- (例) ON/OFF ボタンのアクション

  [<img src="https://cdn.dribbble.com/users/108183/screenshots/5429846/switcher_xliv.gif" width="300px">
  ](https://dribbble.com/shots/5429846-Switcher-XLIV?utm_source=Clipboard_Shot&utm_campaign=Volorf&utm_content=Switcher%20XLIV&utm_medium=Social_Share)

* (例) いいねボタンのアクション

  [<img src="https://cdn.dribbble.com/users/75982/screenshots/2547034/twitter_like_button.gif" width="300px">
  ](https://dribbble.com/shots/2547034-Twitter-like-button-mashup?utm_source=Clipboard_Shot&utm_campaign=bwadds&utm_content=Twitter%20like%20button%20mashup&utm_medium=Social_Share)

- (例) フォーム送信時のローディング

  [<img src="https://cdn.dribbble.com/users/1341046/screenshots/6542025/untitled-2.gif" width="300px">
  ](https://dribbble.com/shots/6542025-Check-Loading-Animation?utm_source=Clipboard_Shot&utm_campaign=EdgarVehbiu&utm_content=Check%20Loading%20Animation&utm_medium=Social_Share)

## ユーザーへの注意を引くためのアニメーションや、 サイトのコンセプトなどを表現するもの

- (例) コンテンツの切り替え時のトランジション

[<img alt="Meroë bordeaux ochre transition landing page carousel burgundy fashion" src="https://cdn.dribbble.com/users/1846841/screenshots/4306748/meroe_.gif" width="450px">
](https://dribbble.com/shots/5429846-Switcher-XLIV?utm_source=Clipboard_Shot&utm_campaign=Volorf&utm_content=Switcher%20XLIV&utm_medium=Social_Share)

- (例) スクロール時の表示アニメーション

[<img alt="Waterfalls Scroll Distort Effect interaction clean after effects landing page animation ux interface web website ui web design" src="https://cdn.dribbble.com/users/688456/screenshots/5400855/ezgif.com-optimize__18_.gif" width="450px">
](https://dribbble.com/shots/5400855-Waterfalls-Scroll-Distort-Effect?utm_source=Clipboard_Shot&utm_campaign=nathanriley&utm_content=Waterfalls%20Scroll%20Distort%20Effect&utm_medium=Social_Share)

- (例) ビジュアルを印象づけるためのアニメーション表現

[<img alt="F R A N C O fade scroll ux ui animated transition animation gif motion hiking camping illustration mountain" src="https://cdn.dribbble.com/users/1846841/screenshots/4301291/f_r_a_n_c_o.gif" width="450px">](https://dribbble.com/shots/4301291-F-R-A-N-C-O?utm_source=Clipboard_Shot&utm_campaign=zakeklund&utm_content=F%20R%20A%20N%20C%20O&utm_medium=Social_Share)

# アニメーションの実装

## CSS アニメーション

`transition` や `animation` プロパティを使って、比較的簡単に実装できるが、複雑なアニメーションは難しい。  
また、`:hover`,`:active` などを除いて、**ユーザーのアクションを取得できない**。（マウスイベント、タッチイベント、スクロールイベント、フォームイベントなど）

## JavaScript を使ったアニメーション

JavaScript を使って要素を変更することで行う。  
ユーザーインタラクションや環境などを取得してインタラクティブなアニメーションが可能。

また、全て自分で実装しなくても、目的に応じた豊富な JavaScript ライブラリがある。

# アニメーションの手法やライブラリ

主に以下の手法を織り交ぜて

### DOM アニメーション

DOM (Html の要素) の style を連続して変更して行うアニメーション。  
UI に対するアニメーションに有効。

> **〈主な DOM アニメーション系ライブラリ〉**  
> TweenMax,
> anime.js,
> kute.js,
> など

### Canvas / WebGL

DOM(HTML 要素)を変更するのではなく `<canvas>` 要素に JavaScript でグラフィックスを描画する。  
かつての Flash の様な自由でインタラクティブな表現や 3D 表現も可能。

- [HTML5 で作る Canvas アニメーションの基礎](https://www.webopixel.net/javascript/1001.html)
- [WebGL 入門 - ics.media](https://ics.media/entry/2328/)

> **〈主な Canvas 系ライブラリ〉**  
> PixiJS (2D),
> Three.js(3D),
> Matter.js(物理演算),
> など

### SVG アニメーション

[SVG](https://webkikaku.co.jp/blog/webdesign/svg_for_webdesigner/) 要素に対して行うアニメーション。  
SVG が HTML/CSS と近いため、比較的わかりやすく、CSS のみでもアニメーション可。  
ロゴやイラストなど、パスでできたアートワークと親和性が高い。(illustrator から書き出しできる)

- [SVG アニメーションの作り方まとめ - ics.media](https://ics.media/entry/15970/)
- [SVG でワードアート](https://slides.com/hashrock/svg-2#/)

> **〈主な SVG 系ライブラリ〉**  
> Snap.svg,
> D3.js,
> kute.js,
> など

### video やアニメ Gif など

`<video>`タグで動画が埋め込める。JavaScript で操作できる(シークや再生・ストップなど)ので工夫次第では面白いものができるかも。
