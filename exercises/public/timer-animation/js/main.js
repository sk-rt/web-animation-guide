"use strict";

document.addEventListener("DOMContentLoaded", function() {
    /**
     * (問題 1) 背景
     *
     *  関数 `bgUpdate`を `setInterval`を使って`4`ミリ秒ごとに呼び出そう。
     */
    const background = document.querySelector(".background");
    let backgroundPos = 0;
    function backgroundUpdate() {
        // CSS background-position-x を変更
        background.style.backgroundPositionX = backgroundPos + "px";
        // -1ずつ減らしていく
        backgroundPos = backgroundPos - 1;
    }


    /**
     * (問題 2) 犬
     *
     * 1. class名が`dog` の要素を取得して、変数`dog`に代入しよう。
     * 2. 変数 `rad` を`let`で宣言して数値 `0`を代入しよう。
     * 3. 関数 `dogUpdate`を宣言して、以下の処理をプログラムしよう。
     *      - 要素`dog`の位置を変える処理 ※1
     *      - 変数`rad` に`0.1` 足す処理 ※2
     * 4. 関数 `dogUpdate`を `setInterval`を使って`10`ミリ秒ごとに呼び出そう。
     *      また、setIntervalの返り値を `let dogTimerID` に代入しよう。
     *
     *
     * ※1: (例) Math.sin() を使って上下に100px 振動させる。
     *      const posY = Math.sin(rad) * 100;
     *      dog.style.transform = "translateY(" + posY + "px)";
     * ＊2: (例) rad = rad + 0.1;
     *          // もしくは
     *          rad += 0.1
     *
     *
     */


    /**
     * (問題 3) addEventListener()
     * 1. class名が`stop` のボタン要素を取得して、変数`stopBtn`に代入しよう。
     * 3. 上記で取得したボタン`stopBtn` が `click` された時、
     *  タイマー`dogTimerID` を`clearInterval`を使って停止しよう。
     */

});
