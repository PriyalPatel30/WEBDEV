// let a=5
// function outer(){
//     function inner() {
//         console.log(a);
//     }
//     return inner
//     // console.log(b);
// }
// let b=outer()
// b();


//      HOISTING
//  for var
var a=5
console.log(a);
a=5
//gives output as undefined as a is being accessed without its value initialized and its undefined.


//  for let
let a=5
console.log(a);
a=5