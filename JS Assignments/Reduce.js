// 7. Create a frequency count of characters.
//    Input: ["a", "b", "a", "c", "b"]
//    Output: {a: 2, b: 2, c: 1}

let arr=["a", "b", "a", "c", "b"]
let printByAanya={}
let count=1
let frequencyCount=arr.reduce((a)=>{
    for(let i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            count++
            printByAanya={input:arr[i],count}
        }
        else{
            count=1
        }
    }
})
console.log(frequencyCount);

