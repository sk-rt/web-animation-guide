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

CSS `transition` や `animation` プロパティを使って、比較的簡単に実装できるが、複雑なアニメーションは難しい。  
また、`:hover`,`:active` などを除いてユーザーのアクションを取得できない。（マウスイベント、タッチイベント、スクロールイベント、フォームイベントなど）

## JavaScript を使ったアニメーション

JavaScript を使って要素を変更することで行う。  
ユーザーインタラクションや環境などを取得してインタラクティブなアニメーションが可能。

また、全て自分で実装しなくても、目的に応じた豊富な JavaScript ライブラリがある。

**〈主なアニメーションライブラリ〉**
TweenMax,
anime.js,
velocity.js,
kute.js,
p5.js
など

<!-- _*本サイトでは JS の基礎からユーザーインタラクションの取得、アニメーションの*_ -->
