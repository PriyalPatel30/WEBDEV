//HIHGER ORDER FUNCTIONS
// function sum(fn){
//     // fn()
//     console.log(fn);
    
// }

// sum(function inner(){
//     console.log('inner func body');
    
// })

// function outer(){
//     function fn() {
      
        
//     }
//     return fn

// }
// outer()



//question : filter data on basis of data type
// let arr=[4,5,3,'hello','hii','byeeee',true,false]
// let result=[]

//SOLUTIOO BUT NOT OPTIMIZED
// function getNumber(){
//     for (let i of arr) {
//     if(typeof i=='number'){
//         result.push(i)
//     }
//  }
// }
// function getString(){
//     for (let i of arr) {
//     if(typeof i=='string'){
//         result.push(i)
//     }
//  }
// }
// console.log(result);


//SOLUTION OPTIMIZED USING HIGHER ORDER FUNCTIONS

let arr=[4,5,3,'hello','hii','byeeee',true,false]

function getString(i){
    return typeof i=='string'
}
function getNumber(i){
    return typeof i=='number'
}
function getBool(i){
    return typeof i=='boolean'
}


function get(arr,fn) {
    let result=[]
    for (let i of arr) {
        if (fn(i)=true) {
            result.push(i)
        }
    }

console.log(result);

}


get(arr,getString)
get(arr,getNumber)
get(arr,getBool)