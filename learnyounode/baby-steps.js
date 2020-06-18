function sumArg() {
  let a = process.argv;
  let sum = 0;
  let num = 0;
  for (var i = 2; i < a.length; i++) {
    num = Number(a[i]);
    sum += num;
  }
  console.log(sum);
}

sumArg();
