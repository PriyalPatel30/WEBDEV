//ASYNC PROGRAMMING

//WEB API

//SET TIMEOUT

// setTimeout(()=>{
//     console.log("hello");
    
// },2000)
// console.log('hiii'); //this gets printed after waiting for 2 seconds

// setTimeout(()=>{
//     console.log("hello");
    
// },0)
// setTimeout(()=>{
//     console.log('byee'); //10=10 miliseconds, 1/10th of a second

// },10)
// console.log('hiii');

//SET INTERVAL

// setTimeout(()=>{
//     console.log('1');
    
//     setTimeout(()=>{
//     console.log('2');
//         setTimeout(()=>{
//          console.log('3');
//             setTimeout(()=>{
//              console.log('4');
//              setTimeout(()=>{
//              console.log('5');

    
// },1000)    
// },1000)  
// },1000)
// },1000)
// },1000)
//   USING LET 
// for(let i=1;i<=5;i++){
//     setTimeout(()=>{
//         console.log(i);
        
//     },i*1000)
// }

//     USING VAR
// for(var i=1;i<=5;i++){
//     setTimeout
// }

// function print(i) {
//     setTimeout(()=>{
//         console.log(i);
        
//     },1000*i)
// }

// for(var i=1;i<=5;i++){
//     print(i)
// }

// let arr=[1,2,3,4,5]


var a=3
function foo(){
    console.log(a);
    console.log(bar());
    var a=5
    function bar(){
        return 4
    }   
}
foo()


// a=undefined
// foo()
// [
    // foo ke andr a=undefined again
//     log a --> undefined

//     log bar()
//     bar{
//         4 
//         return -> fn cut  
//     }
// ]