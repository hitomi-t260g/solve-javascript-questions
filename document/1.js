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
    // 
// その状態ではどのような値やエラーとして処理されるのか
    //
// 結果