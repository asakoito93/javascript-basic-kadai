// 変数numに0～100までのランダムな整数を代入する
let num = Math.floor(Math.random() * 100);

// 変数numの値を出力する（確認用）
console.log(num);

// 変数numの値が4であれば、「大当たりです」という文字列を出力する
if (num % 3 == 0) {
  console.log('3の倍数です');
}

// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num % 5 == 0) {
  console.log('5の倍数です');
}

// 変数numの値が3であれば、「当たりです」という文字列を出力する
else if (num % 3 == 0 && num % 5 == 0 ) {
  console.log('3と5の倍数です');
}

// それ以外のときは、「はずれです」という文字列を出力する
else {
  console.log(num);
}
