// 1. Write a function `greet(name, callback)` that prints 'Hello, <name>' and then executes the callback
//  after 2 seconds using setTimeout

//     function greet( name, callback){
//     console.log("Hello " + "," + " "+name);
//     setTimeout(()=>{
//         callback();
//     },2000)
// }
// greet("Erica ",function(){
//     console.log("Callback   Function done");
// })


// 2. Callback Hell:
//  Convert the following nested callbacks into a Promise chain:
//  setTimeout(() => {
//   console.log('Step 1');
//   setTimeout(() => {
//     console.log('Step 2');
//     setTimeout(() => {
//       console.log('Step 3');
//     }, 1000);
//   }, 1000);
//  }, 1000)

// let step1 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Step 1");
//         },1000)
//     })
// }

// let step2 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Step 2");
//         },1000)
//     })
// }

// let step3 = function(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("Step 3");
//         },1000)
//     })
// }

// step1().then((data1)=>{
//     console.log(data1);
//     return step2();
// }).then((data2)=>{
//     console.log(data2);
//     return step3();
// }).then((data3)=>{
//     console.log(data3);
// })

// 3. Create a Custom Promise:
//  Write a function `isEven(number)` that returns a Promise. If the number is even, resolve with 'Even
//  number', otherwise reject with 'Odd number'