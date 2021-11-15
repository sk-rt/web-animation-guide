"use strict";

/*
　ランダムな整数を返す関数
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

// min,maxを好きな数値に変更してみよう
console.log(getRandomInt(-10, -8));

/*
 (問題 1) 要素の取得

  1. 変数 `kuriAll` を宣言し、querySelectorAll()をつかって、class名が`kuri`の要素を全て取得・代入しよう。

  2. 変数 `randomBtn` を宣言して、class名が `random-move` の要素を代入しよう。
*/

/*
 (問題 2) 関数の作成 / イベント登録
  1. 関数 `kuriMove` を定義して、配列`kuriAll`の全ての要素をランダムな位置に変更しよう。
     - `kuriAll`は `for`文で1つずつ取り出して別々に処理をすること。
     - ランダムな位置は `-300` 〜 `300px` の間で取得すること。
     - 位置の変更は `transform` プロパティを使うこと。

  2. 要素 `randomBtn` がクリックされた時に、関数 `kuriMove`関数を実行しよう。
*/
