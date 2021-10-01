"use strict";

/*
(問題 1) 背景のアニメーション

 以下の関数 `backgroundLoop`を `requestAnimationFrame`を使って連続して呼び出そう。

*/
const background = document.querySelector(".background");

let backgroundPos = 0;
function backgroundLoop() {
    // 背景位置 `background-position-x` を変更
    background.style.backgroundPositionX = backgroundPos + "px";
    // 3pxずつ動かす
    backgroundPos -=3;
}


/*
(問題 2) 犬のアニメーション

1. class名が`dog` の要素を取得して、変数`dog`に代入しよう。
2. 変数 `radian` を`let`で宣言して数値 `0`を代入しよう。
3. 関数 `dogLoop`を宣言して、以下の処理をプログラムしよう。
      - 要素 `dog` を上下に振動させる処理 ※1
      - 変数 `radian` に`0.1` 足す処理 ※2
4. 関数 `dogLoop`を `requestAnimationFrame`を使って連続して呼び出そう。

※1: (例) Math.sin() を使って上下に100px 振動させる。
      const posY = Math.sin(radian) * 100;
      dog.style.transform = "translateY(" + posY + "px)";
※2: (例) radian += 0.1
*/




/*
(問題 3) ストップボタンの実装

1. 問題2を修正して、変数 `dogReqID` をletで宣言しよう。また、dogReqIDにrequestAnimationFrameの返り値を代入しよう。
2. class名が`stop` のボタン要素を取得して、変数`stopBotton`に代入しよう。
3. 上記で取得したボタン`stopBotton` が `click` された時、
   タイマー`dogReqID` を`cancelAnimationFrame`を使って停止しよう。
4. 背景のアニメーションも停止する様に修正しよう。
*/


