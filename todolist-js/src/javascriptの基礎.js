/**
 * const,let等の変数宣言
 */
// var 変数について
var val1 = "var変数";
console.log(val1);

// var変数は上書き可能
val1 = "var変数を上書き";
console.log(val1);

// var変数は再宣言可能
var val1 = "val1を再宣言";
console.log(val1);

// let変数について
let val2 = "let変数";
console.log(val2);

// letは上書き可能
val2 = "let変数を上書き";
console.log(val2);

// letは再宣言不可
// let val2 = "let変数を再宣言";

// const変数について
const val3 = "const変数";
console.log(val3);

// const変数は上書き不可
// val3 = "const変数を上書き";

// constで定義したオブジェクトのプロパティは変更可能
const val4 = {
  name: "テスト",
  age: 29
};
val4.name = "テストで上書き";
val4.address = "大阪";
console.log(val4);

// constで定義した配列のプロパティは変更可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);

/**
 * テンプレート文字列
 */
const name_1 = "テスト";
const age_1 = 29;
// 「私の名前はテストです。年齢は２９歳です。」

// 従来の方法
const message_1 = "私の名前は" + name_1 + "です。年齢は" + age_1 + "です。";
console.log(message_1);

// テンプレート文字列
const message_2 = `私の名前は${name_1}です。年齢は${age_1}です。`;
console.log(message_2);

/**
 * アロー関数
 */
// 従来の関数
function func1(str) {
  return str;
}
const func_1 = function (str) {
  return str;
};
console.log(func1("func1です"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("func２です"));

// 処理が一行で終わる場合は{}で囲わなくても良い。
const func3 = (num1, num2) => num1 + num2;

console.log(func3(10, 20));

/**
 * 分割代入
 */
const myProfile_1 = {
  name: "テスト",
  age: 29
};

const message1 = `名前は${myProfile_1.name}です。年齢は${myProfile_1.age}歳です。`;
console.log(message1);

// オブジェクトからプロパティを抜き出し
const { name, age } = myProfile_1;
const message2 = `名前は${name}です。年齢は${age}歳です。`;
console.log(message2);

const myProfile = ["テスト", 29];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
console.log(message3);

// 配列から要素を取り出し
const [name_2, age_2] = myProfile;
const message4 = `名前は${name_2}です。年齢は${age_2}歳です。`;
console.log(message4);

/**
 * デフォルト値、引数など
 */
// デフォルト値”ゲスト"
const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん！`);
sayHello("テスト");

/**
 * スプレッド構文 ...
 */
// 配列の展開
const arr1 = [1, 2];
console.log(arr1);
console.log(...arr1);

const sumFunc = (num_1, num_2) => console.log(num_1 + num_2);
sumFunc(arr1[0], arr1[1]);
sumFunc(...arr1);

// まとめる
const arr2 = [1, 2, 3, 4, 5];
const [num_1, num_2, ...arr3] = arr2;
console.log(num_1);
console.log(num_2);
console.log(arr3);

// 配列のコピー、結合
const arr4 = [10, 20];
const arr5 = [30, 40];

const arr6 = [...arr4]; // 値渡し
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

const arr7 = [...arr4, ...arr5];
console.log(arr7);

const arr8 = arr4; // 参照渡し
console.log(arr8);
arr8[0] = 100;
console.log(arr8);
console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
// 従来 for文
const nameArr = ["山田", "田中", "佐藤"];
for (let index = 0; index < nameArr.length; index++) {
  console.log(`${index + 1}番目は${nameArr[index]}です`);
}

const nameArr2 = nameArr.map((name) => {
  return name;
});
console.log(nameArr2);

nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

nameArr.map((name) => console.log(name));
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
  if (name === "佐藤") {
    return name;
  } else {
    return `${name}さん`;
  }
});
console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件　？　　条件がTrueの時　：　条件がFalseの時
const val_1 = 1 < 0 ? "Trueです" : "Falseです";
console.log(val_1);

const numT = "1300";
console.log(numT.toLocaleString());

const formattedNum =
  typeof numT === "number" ? numT.toLocaleString() : "数値を入力してください";
console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 60));
console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう  && ||
 */

const flag1 = true;
const flag2 = true;

if (flag1 || flag2) {
  console.log("１か２はTrueになります");
}
if (flag1 && flag2) {
  console.log("１も２もTrueになります");
}

// || は左側がFalseなら右側を返す
const num = null;
const fee = num || "金額未設定です";
console.log(fee);

// && は左側がTrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
