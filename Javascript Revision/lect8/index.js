// let arr=[
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]
// let data=arr[0].map((value,index)=>{
//     return arr.reduce((sum,row )=>{
//         return sum+row[index]
//     },0)
// })
// console.log(data);

let arr=[1,2,2,3,4,4,5,5]
let newarr=[]

for(let i of arr){
    if (newarr.includes(i)) {
       console.log(i);
       break
        
    }
    newarr.push(i)
}