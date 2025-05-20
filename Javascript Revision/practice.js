// let var1=1
// let var2=9

// while(var1 <=9 && var2 >=1 ){
//     console.log(var1, "*", var2, "=", var1*var2);
//     var1++
//     var2--
// }


// PRINT PRIME NUMBERS FROM 1 TO 100
// TWO LOOP COUNTER VARIABLE

// for (let i = 1; i <= 5; i++) {
//   console.log(i, "---");
//   const number = i
//   let isPrime = true
//   for(let j=2; j<number; j++){
//     if(number % j === 0) {
//       isPrime = false
//     }
//   }
//   if(isPrime) {
//     console.log("Prime number", number);
//   }
// }


// Given number =1 , increment till 100, if num is div by 3 multiply with 3,
// else if div by 5 multiply with 5, else increase by 1



let i=1
while(i<=100){
    if(i%3===0){
        console.log("number divided by 3 is =", i*i);
        
    }

    else if(i%5===0){
        console.log("number divided by 5 is =", i*i);
        
    }
    i++
}