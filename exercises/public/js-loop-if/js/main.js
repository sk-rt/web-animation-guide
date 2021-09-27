"use strict";

const fizzBuzz = document.querySelector('#FizzBuzz');

/**
 * div#FizzBuzz内にdivを生成する
 */
function print(string){
    const element = document.createElement('div');
    element.innerHTML = string;
    fizzBuzz.appendChild(element)
}

/*
 (問題 1)
 1. for文を使って `0`から`100` までの数字を画面に出力しよう。
 　　＊画面への出力は上に定義している `print()` 関数を使うこと。例: `print(index);`
 2. また、数字が3の倍数の時は数字の代わりに "Fizz" を、5の倍数の時は "Buzz" を表示させよう。
 3. 3の倍数かつ5の倍数の時は "FizzBuzz" を表示させよう。

 */

