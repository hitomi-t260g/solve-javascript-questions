// 1672. Richest Customer Wealth
//https://leetcode.com/problems/richest-customer-wealth/
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Example 2:

// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

accounts = [
  [1, 5],
  [7, 3],
  [3, 5, 1],
];

const maximumWealth = (accounts) => {
  let max = Math.max(
    ...accounts.map((customer) =>
      customer.reduce((total, current) => total + current, 0)
    )
  );
  return console.log(max); //leetcodeでは@return {number}とのことなので、return max;とする。
};

maximumWealth(accounts);

//// 配列の中の最大値を出すには、Math.max([1,2,3]);とかでできる。
// 難しいところは、配列の中の配列の合計値に対して最大値を出す、という配列内の配列の処理の仕方。
//// 配列の中の値を1つにまとめる方法としては、reduceを使う。以下はただの説明
// reduceは配列の中の値を1つにまとめるメソッドです。例えば、配列の中の数値を左から順に足していけば合計を出力できますし、配列の中が文字列なら、文字列を左から順につなげて一つの長い文字列にすることができます。
// 配列の中身に対して左から順番に何らかの処理をして1つにまとめていく、とイメージすればわかりやすいと思います。
// 第二引数は初期値で、これを0とかで与えないと、コレクションの場合など失敗する（MDNも第二引数設定推奨）
// reduce((0,1) => 0 + 1,0)
// const maximumWealth = (accounts) =>
// accounts.reduce((total, current) => total + current, 0)
// maximumWealth(accounts);  結果は＝＞'01,57,33,5,1' で配列になってくれない問題が発生する

//// map関数で、配列のすべての要素を合計して新しい配列にする
// var smp = [1,2,3,4,5].map((i) => { return(i+1);}); console.log(smp);だと配列にすべて＋１した配列になる
////reduceとmap2つあわせると
// const maximumWealth = (accounts) =>
//   accounts.map((customer) =>
//       customer.reduce((total, current) => total + current, 0))
// maximumWealth(accounts);  結果は＝＞[6, 10, 8]
// このままMath.maxに上記を渡すと構文エラーになる。これは、Math,maxは複数の値が直下に指定されていないといけないので、1つの配列だと対応できないため。
// ということで、...accounts.mapというようにスプレッドで渡す（MDN非推奨）

// ダメだった例（reduce内でreduceを使うと、reduceは関数じゃないよと怒られる
accounts = [
  [1, 5],
  [7, 3],
  [3, 5, 1],
];

const maximumWealths = (accounts) => {
  const smp = (b) => {
    b.map((customer) =>
      customer.reduce((total, current) => total + current, 0)
    );
  };
  return accounts.reduce(smp);
};

maximumWealths(accounts);

accounts = [
  [1, 5],
  [7, 3],
  [3, 5, 1],
];

const maximumWealth = (accounts) =>
  Math.max(
    ...accounts.map((customer) =>
      customer.reduce((total, current) => total + current, 0)
    )
  );

maximumWealth(accounts);
