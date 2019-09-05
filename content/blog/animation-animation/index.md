---
title: CSSアニメーション 3 - animation
date: "2019-03-05"
excerpt: " 高度なキーフレームアニメーション"
tags: [CSS]
featuredImage: featured-css-animation.png
samples:
---

#CSS でのキーフレームアニメーション

`animation` プロパティと `@keyframes` を使って CSS のみで[キーフレームアニメーション](https://entry.cgworld.jp/terms/%E3%82%AD%E3%83%BC%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%82%A2%E3%83%8B%E3%83%A1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3.html)を作成できる。

<iframe height="500" style="width: 100%;" scrolling="no" title="keyfrme animation" src="//codepen.io/RsakaiForEducation/embed/MdpPeR/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/MdpPeR/'>keyfrme animation</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## animation の指定方法

| 主なプロパティ                  |                                                                                                                                  |
| :------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- |
| **`animation-name`**            | `@keyframes`で指定したアニメーションの名前。<br>(例)`animation-name: my-animation`                                               |
| **`animation-duration`**        | **長さ**。 スタートしてから終わるまでの時間。 <br>(例)`transition: rotate(180deg)`                                               |
| **`animation-delay`**           | **開始時間**。始まるまでの時間。 <br>(例)`animation-delay: 1.4s`                                                                 |
| **`animation-iteration-count`** | **繰り返し回数**。`infinite`で無限回 <br>(例)`animation-iteration-count: 4`                                                      |
| **`animation-timing-function`** | **イージング**。変化の仕方。 <br>(例)`animation-timing-function: ease-in-out`                                                    |
| **`animation-direction`**       | **再生方向**。`normal` だと常に一定方向に変化。`alternate` で奇数回は逆方向に変化する。 <br>(例)`animation-direction: alternate` |

＊`animation: [name] [duration] [timing-function] [delay] [count] [direction]` と一括指定することもできる。

## keyframes の指定方法

`@keyframes 任意の名前 { ... }` に 0％〜100％の間の任意の位置の style を指定する。  
＊キーフレームの名前は任意で決める。(半角英数字)

```css
@keyframes my-animation {
  0% {
    プロパティ: 値;
  }
  100% {
    プロパティ: 値;
  }
}
```

## サンプル

<iframe height="400" style="width: 100%;" scrolling="no" title="keyfrme animation 3" src="//codepen.io/RsakaiForEducation/embed/KLWrpw/?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/RsakaiForEducation/pen/KLWrpw/'>keyfrme animation 3</a> by R Sakai
  (<a href='https://codepen.io/RsakaiForEducation'>@RsakaiForEducation</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

> **animation 参考**  
> [【CSS3】@keyframes と animation 関連のまとめ](https://qiita.com/7968/items/1d999354e00db53bcbd8)  
> [使える！CSS アニメーション 20 選](https://lab.sonicmoov.com/markup/css/css-animation-20/)  
> [Pure CSS Emoji](https://codepen.io/pbutcher/pen/wMxwbr)
