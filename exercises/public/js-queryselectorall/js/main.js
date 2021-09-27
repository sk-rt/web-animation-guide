"use strict";

/*
 (問題 1)
 document.querySelectorAll() を使ってclass名が `kana-button` の要素を全て取得し、変数 `kanaButtons` に代入しよう
 */

/*
 (問題 2)
 for文を使って `kanaButtons` から一つ一つ要素を取り出し、console.log()に出力しよう
 */

/*
  (問題 3)
  問題 2で取り出した要素に `addEventListener`を使ってでclickイベントを登録しよう。
  また、clickされた時、 `element.textContent` を使って要素の中の文字列を取得して、 console.log()に出力しよう。
*/

/*
  (問題 4)
    問題 3を変更し、clickされた時に要素の中の文字列を、音声で出力しよう。
    ＊以下のspeak関数の引数に要素の中の文字列を渡すと音声が流れます。 ex. speak("あ");
*/

/**
 * 音声を出力する関数
 * @see https://developer.mozilla.org/ja/docs/Web/API/Web_Speech_API
 */
function speak(string) {
    if (window.SpeechSynthesisUtterance === undefined) {
        alert("Web Speech APIに対応していません");
        return;
    }
    const synthes = new SpeechSynthesisUtterance();
    synthes.text = string;
    synthes.lang = "ja-JP";
    speechSynthesis.speak(synthes);
}
