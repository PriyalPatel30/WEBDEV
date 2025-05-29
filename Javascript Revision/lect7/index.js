// let arr=[[1,2,3,4,5],[6,7,8,9,0]]

// let data= arr.map((a,b,c)=>a.map((result)=>{
//     return result*2
// }))
//     console.log(data.flat());
    //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
    //Flat converts into a single 1-d array  // arr=arr.flat()

//1. Sum of elements of arr
//Sum of all Elements (Poore matrix ka sum nikaalo)

// let sumData=arr.reduce((sum,b)=>{
//     return sum+b.reduce((value,result)=>{
//         return value+result
//     },0) //here value's initial value becomes 0
// },0)  // here sum is 0 at start
// console.log(sumData);


// 2.Row-wise Sum (Har row ka sum print karo)
let arr=[[1,2,3,4,5],[6,7,8,9,0]]
let data=arr.map((a,b)=>a.reduce((sum,result)=>{
    return  sum+result
},0))
console.log(data);
