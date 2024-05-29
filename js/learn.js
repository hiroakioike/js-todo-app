// 変数や定数の宣言
const name = '太郎';
let age = 20;
// 使わない
var height = 170;

// constは再代入できない
// name = '花子'; // => learn.js:8 Uncaught TypeError: Assignment to constant variable.

// letは再代入できる
age = 30;

// console.log(name); // => 太郎
// console.log(age); // => 30

// 変数の型
// 文字列(string)
const str = '文字列';
// 数値(number)
const num = 1.5;
// JSで扱える数字の最大値2^53-1
const max = 9007199254740991;
// 真偽値(boolean)
const bool = true;
// null(値がないことを表す)
const nullType = null;
// undefined(未定義)
const undefinedType = undefined;
// オブジェクト(object)
const objType = { key: 'value' };
// 配列(array)
const arrType = [1, 2, 3];

// 関数の宣言
function hello() {
  console.log('こんにちは');
}
// 関数の呼び出し
// hello(); // => こんにちは

// 引数を受け取る関数
function greet(name) {
  console.log(`こんにちは、${name}さん`);
  // テンプレートリテラル `${変数}`
  // 'こんにちは、' + name + 'さん';と一緒
}

// アロー関数
const greet2 = (name) => {
  console.log(`こんにちは、${name}さん`);
};

// オブジェクトの宣言
const obj = {
  key: 'value',
  'key-name': 'value2',
  keyName: 'value3',
  hoge: {
    fuga: 'piyo',
    'fuga-2': 'piyo2',
  },
};
// console.log(obj);
// console.log('console.logで出力させたよ');
// console.log(obj.key); // => value
// console.log(obj['key-name']); // => value2
// console.log(obj.hoge.fuga); // => piyo
// console.log(obj.hoge['fuga-2']); // => piyo2

// 配列の宣言
const arr = [1, 2, 3];
// console.log(arr); // => [1, 2, 3]

// 配列の要素を取得
// 配列の要素は0から始まる
// console.log(arr[0]); // => 1
// console.log(arr[2]); // => 3

const arr2 = ['hoge', 2, true];
// console.log(arr2); // => ['hoge', 2, true]
// console.log(arr2[0]); // => hoge

// オブジェクト配列
const objArr = [
  { key: 'value' },
  ['apple', 'banana'],
  { key: 'value2', hoge: ['fuga', 'piyo'] },
];
// console.log(objArr[2].key); // => value2
// console.log(objArr[1][0]); // => apple
// console.log(objArr[2].hoge[1]); // => piyo

// 条件分岐
const age2 = 20;
if (age2 >= 20) {
  // console.log('成人です');
}

// 条件分岐(else)
const age3 = 19;
if (age3 >= 20) {
  // console.log('成人です');
} else {
  // console.log('未成年です');
}

// 条件分岐(else if)
const age4 = 18;
if (age4 >= 20) {
  // console.log('成人です');
} else if (age4 >= 18) {
  // console.log('高校生です');
}

// DOM操作
// HTML要素の取得
const targetElement = document.getElementById('target');

// targetの子要素にpタグを追加してみる

// クリックイベント

// クリックされたらアラートを表示
const button = document.getElementById('btn');
button.addEventListener('click', () => {
  const inputElement = document.getElementById('inputForm');
  const inputValue = inputElement.value;
  // console.log('inputValue:', inputValue);

  // pタグを作成
  const pElement = document.createElement('p');
  // pタグの中身を設定
  pElement.textContent = inputValue;
  // targetの子要素にpタグを追加
  targetElement.appendChild(pElement);
  // pタグにクラス名を追加
  pElement.classList.add('js-added');
});

// ハンバーガーメニューを作る
const burger = document.getElementById('burger');
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
});
