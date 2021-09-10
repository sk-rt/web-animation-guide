"use strict";

/**
 *　⚠️ DOMが操作できる様になるまで待つ必要があるため、
 * `document.addEventListener("DOMContentLoaded",function(){ ... });` の中に書く。。
 */

document.addEventListener("DOMContentLoaded", function() {
    /**
     * (問題 1) querySelector()
     * class名が`button-bark` のボタン要素を取得して、変数`btnBark`に代入しよう。
     */

    /**
     * (問題 2) function
     *  `alert("わん！")` を実行する関数 `bark`を定義しよう。
     */


    /**
     * (問題 3) addEventListener()
     * 上記で取得したボタン`btnBark` が `click` された時、
     *  関数`bark`を実行するイベントを登録しよう。
     */


    /**
     * (問題 4) querySelector()
     * 1. class名が`button-sitdown` と `button-spin` の要素を取得して
     * 　　それぞれ変数`btnSitdown`と`btnSpin`に代入しよう。
     * 2. class名が`my-dog`の要素を取得して、変数`myDog`に代入しよう。
     * 3. `myDog` に class `is-spinning` を追加する
     */


    /**
     * (問題 5) function
     *  1. 上記で取得した要素 `myDog` に class `is-spinning` を追加する関数 `spin`を定義しよう
     *      ＊classの追加は `myDog.classList.add("is-spinning");`
     *  2. `myDog` の class `is-spinning` を削除する関数 `sitdown`を定義しよう
     */


    /**
     * (問題 6) addEventListener()
     *  1. 上記で取得したボタン`btnSitdown` が `click` された時、
     *      関数`sitdown`を実行するイベントを登録しよう。
     *  2. 同じ様に`btnSpin`が`click` された時、関数`spin`を実行させよう。
     */
});
