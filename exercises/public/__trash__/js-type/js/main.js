"use strict";

/**
 * (問題 1)
 * BMIを計算して、`console.log()` で表示しよう。
 * 計算方法: BMI = 体重 / (身長 * 身長)
 */
const weight = 60; //体重
const height = 170; //身長

/**
 * (問題 2)
 * 好きな食べ物の配列を作成して `console.log()`で表示しよう。
 * ex) const myFavoridFood = ["ラーメン","カレー"]
 */

/**
 * (問題 3)
 * myProfileオブジェクトのメンバーに自己紹介を記入しよう
 * ex) name, age, gender, favoriteFood など。
 */

const myProfile = {};

/* ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
 * 以下は触らなくてOK
 */

//myProfileをページに表示する処理
function showProfile(profile) {
    document.write(`<h1>My Profile</h1>`);
    const myProfileKeys = Object.keys(profile);
    if (myProfileKeys.length === 0) {
        return;
    }
    for (let index = 0; index < myProfileKeys.length; index++) {
        const key = myProfileKeys[index];
        document.write(`<h2>[${key}] ${myProfile[key]}</h2>`);
    }
}
showProfile(myProfile);
