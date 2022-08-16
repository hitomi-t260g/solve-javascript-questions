// 1. 何が出力されるでしょうか？


function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();


// A: Lydia と undefined
// B: Lydia と ReferenceError
// C: ReferenceError と 21
// D: undefined と ReferenceError 


// varとletで変数宣言する前にconsole.log が走るのがポイント
// 宣言する前にはどういう状態になっているのかを知っているか
    // var: undefinedとしてメモリが確保される
    // let: メモリの確保がない。これは"temporal dead zone"と呼ばれる。constも同じ
// その状態ではどのような値やエラーとして処理されるのか
    //undefined: undefinedが結果として出力される
    //なにも値が設定されていない場合は、　reference errorとなる
// 回答： D