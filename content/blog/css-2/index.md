---
title: CSS基礎 2
date: "2019-01-20"
excerpt: "カラーコードや単位、基礎的なプロパティ紹介"
tags: ["CSS"]
featuredImage: "featured-css.png"
---

# 色（カラーコード）の指定について

- 色は `16進数` で指定することが多い。(`カラーコード`)
- 6 桁の値、例えば `#FF0099` は 3 原色に分解すると `R:FF G:00 B:99` となり、10 進数に直すと `R:255 / G:0 / B:153` になる

> 参考:  
> [RGB と 16 進数カラーコードの相互変換ツール](https://www.peko-step.com/tool/tfcolor.html)  
> [Adobe Color](https://color.adobe.com/ja/create/color-wheel/)  
> [原色大辞典](https://www.colordic.org/)

- その他主な色指定として `rgba` がある。`rgba(255,0,153,0.5)`などと記述し、10 進数の RGB 値 + **透明度(0〜1)**を指定できる。

# サイズの単位

CSS で使う主な単位に、ピクセル(px)、パーセント(%)、em、vw など

|             |                                                                                                                                                                                                                |
| :---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **px**      | 絶対単位。ピクセル数で指定。 <br>例：`width: 100px;` `font-size: 16px` など                                                                                                                                    |
| **%**       | 相対単位。指定するプロパティによって基準が変わるので注意。width なら親要素（1 つ上の要素）の幅が基準。 <br>例：`width: 50%;` `padding: 10%;` など                                                              |
| **em**      | 相対単位。その要素の**フォントサイズ**が基準。<br>例えば親要素のフォントサイズが 20px だった場合、 width: 1.5em; と指定すると、サイズは 30px になる。 <br>例：`font-size: 1.2em;` `margin-bottom: 0.8em;` など |
| **rem**     | 絶対単位。ルート要素(html タグ)に指定されたフォントサイズが基準。 <br>例：`font-size: 0.9rem;` `padding: 1rem;` など                                                                                           |
| **vw / vh** | ブラウザのウインドウ幅を `100vw` とした単位。 ウィンドウの半分のサイズなら `50vw` となる。<br>ウィンドウの高さを 100 とする単位は `vh`。 <br>例：`width: 40vw;` `padding: 20vh;` など                          |

# よく使うプロパティ

## テキスト・フォント系

|                       |                                                                                                                                        |
| :-------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **`color`**           | 文字の色を指定する。 <br>例：`color: #FF0000;` など                                                                                    |
| **`font-size`**       | 文字サイズを指定する。px、em、rem などで指定。 <br>例：`font-size: 18px;` など                                                         |
| **`font-weight`**     | 文字の太さ。`normal` `bold` のほか、`100〜900`の数値でも指定可能。<br>例：`font-weight: bold;` `font-weight: 600;` など                |
| **`line-height`**     | 行の高さ（行間）を指定。単位を省略すると(1.5 など) その要素の文字サイズを基準に計算してくれる。 <br>例：`line-height: 1.8;` など       |
| **`text-decoration`** | 文字の装飾（下線、上線、取り消し線）を指定する。 a タグにはデフォルトで下線 underline が指定されている。 <br>例：`olor: #FF0000;` など |

## ボーダー（枠線）

| border       |                                                                                                                                              |
| :----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **`border`** | 要素の周囲にボーダー（枠線）を付ける。[参考](https://developer.mozilla.org/ja/docs/Web/CSS/border) <br>例：`border: 2px solid #FF0000;` など |

## 背景

| backround                 |                                                                                                                                                     |
| :------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`background-color`**    | 背景色を指定する。<br>例：`background-color: #FF0000;` など                                                                                         |
| **`background-image`**    | 背景に画像を指定する。[参考](https://developer.mozilla.org/ja/docs/Web/CSS/background-repeat) <br>例：`background-image: url("../image.png");` など |
| **`background-repeat`**   | 背景画像の繰り返し指定。[参考](https://developer.mozilla.org/ja/docs/Web/CSS/background-repeat) <br>例：`background-repeat: repeat;` など           |
| **`background-position`** | 背景画像の位置を指定する。[参考](https://developer.mozilla.org/ja/docs/Web/CSS/background-position) <br>例：`background-position: 0% 50%;` など     |

> その他プロパティの参考  
> [CSS プロパティ一覧](https://www.tagindex.com/stylesheet/properties/)  
> [スタイルシートリファレンス（目的別）](http://www.htmq.com/style/)
