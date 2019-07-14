function reverseNumber(numb) {
    let x = 0,
        y = Math.sign(numb),
        z = Math.abs(numb);
    while (z > 0) {
      x = x*10 + z%10;
      z = ~~(z / 10);
    }
    return x * y;
  }
  
reverseNumber(-12367001109);
reverseNumber(12367001109);
reverseNumber(-1000);



      
// function reverseNumber(num) {
//     let str = Math.abs(num).toString();
//     let result = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//       result += str[i];
//     }
//     return parseFloat(result) * Math.sign(num);
//   }
  
//   console.log(reverseNumber(123));
//   console.log(reverseNumber(-456));
//   console.log(reverseNumber(10000));


// function revert(num) {
//     var x = 0;
//     while (num > 0) {
//       x = x*10 + num%10;
//      numn = ~~(num / 10);
//     }
//     return x
//   }
//   let y = 12367001109;
//   revert(y) // 90110076321