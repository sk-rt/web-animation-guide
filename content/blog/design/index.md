---
title: デザインカンプ制作
date: "2019-04-20"
excerpt: "illustratorでのデザイン制作方法・画像の書き出し方"
tags: ["デザイン"]
featuredImage: "featured-design.png"
samples: []
---

# デザインカンプの作成

サイトの構成や内容が決まった後、デザインが決まっていない状態でコーディングを始めると効率が悪い。  
まず**デザインカンプ**を制作して、それを元にコーディングを進めていく。

## Web デザインのフロー

![デザインのフロー](./fig_d_01_01.png)

# illustrator での作成・書き出し方法

今回は `Adobe illustrator` を使用します。

## 新規作成

- Ai を起動し、上部メニューの`ファイル→新規` or `⌘N`
- web プリセットから作成するか、カンバスサイズを指定して作成する。
- 単位は**ピクセル**、カラーモードは **RGB** に設定すること。

> **デザインのサイズについて**  
> デザインを作成する際のサイズは PC 用のデザインでは **1280~1980px**、スマホ用のデザインでは **320〜750px** で作成することが多い。

![新規作成](./fig_d_01_02.png)

## Ai 初期設定

- 上部メニューの`illustrator →環境設定→ 一般`
- キー入力を`1px`に
- 同じ画面、右メニューの`単位` を全てピクセルに

![初期設定](./fig_d_01_03.png)

## 書き出し

- `「アセットの書き出し」` を利用してサイトに必要な画像を書き出す。
- ※ファイル名は必ず**半角英数字**で指定する。（記号はハイフン、アンダーバーが使用可）

![書き出し](./fig_d_01_04.png)

# 画像の形式（フォーマット）について

- 形式によって荒れたりファイルサイズが大きくなったりするので、適切なフォーマットを使用する。
- 基本は以下
  - **写真** → `JPEG`
  - **ロゴや平面的なイラスト** → `PNG` or `SVG`

|        |                                                                                                                                                                                                                                                                                                                              |
| :----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `JPEG` | <small>`拡張子： .jpg / .jpeg`</small> <br>● **_写真_**に向いている。<br> ● 圧縮レベルが指定できる（0〜100）<br>● web で使用する場合は 60〜80 くらいがベスト<br>● 非可逆圧縮なので保存を繰り返すと荒れる<br>● イラストやロゴなどの平面的な画像には向かない。（png よりもファイルサイズが大きくなったり、荒れが目立つことも） |
| `PNG`  | <small>`拡張子： .png`</small> <br>● **_イラストやロゴなど_**に向いている。<br> ● **_背景透過処理_**ができる。<br>● 写真には向かない。（ファイルサイズが大きくなる）                                                                                                                                                         |
| `GIF`  | <small>`拡張子： .gif`</small> <br>● PNG と同じく透過処理ができるが半透明は使えない。<br> ● **_アニメーション(GIF アニメ)_**が作成できる。                                                                                                                                                                                   |
| `SVG`  | <small>`拡張子： .svg`</small> <br>● 上記 3 種がビットマップ画像(ドットで構成)なのとは違い SVG は**_ベクター画像_**。<br> ● ビットマップと違い、**_拡大しても荒れない。_** <br> ● XML で記されてるのであとで編集も可能。 <br>● html に直接記入可能<br>● 複雑なイラストや写真には向かない。                                   |

# 現在の UI デザインのツール

現在は UI 制作に特化したデザインツールが多くある。  
また、その多くにプロトタイピング(モックアップ) 機能がついており、事前の UX の確認に便利。

> UI デザイン / プロトタイピングツール 紹介
>
> - [Adobe XD](https://www.adobe.com/jp/products/xd.html)
> - [Sketch](https://www.sketch.com/)
> - [Figma](https://www.figma.com)
> - [inVision](https://www.invisionapp.com/)