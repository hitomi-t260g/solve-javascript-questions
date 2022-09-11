// 何が出力されるでしょうか？
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter();
shape.perimeter();

// A: 20 と 62.83185307179586
// B: 20 と NaN
// C: 20 と 63
// D: NaN と 63

//アロー関数と正則関数でのthisに扱いについて問う問題
//salesforceのtrailheadにも出ているので頻出しそう
//正則関数の場合は、constしているベースオブジェクトをthisとして、そのプロパティであるradiusを参照することができる
//アロー関数の場合は、現在の周囲の範囲を参照します。これは、perimeter関数を呼ぶと、shapeオブジェクトではなく、その周囲の範囲（例えば window）を参照することを意味します。
// perimeterもthisでradiusをみるためには、正則関数に変更するとよい
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter() {
    return 2 * Math.PI * this.radius;
  },
};

shape.diameter();
shape.perimeter();
