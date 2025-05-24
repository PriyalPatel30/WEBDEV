//  FILTER QUESTIONS 
//  4. Filter out prime numbers.
//    Input: [2, 3, 4, 5, 6, 7]
//    Output: [2, 3, 5, 7]

// let arr=[2, 3, 4, 5, 6, 7]
// let primeNumber=arr.filter((a)=>{
//     if(a==2){
//         return a
//     }
//     else{
//         for(let i=2;i<a;i++){
//             if(a%i==0){
//                 break;
//             }
//             else{
//                 return a;
//             }}
//     }
// })
// console.log(primeNumber);

// 5. Filter names that start with 'A' or 'a'.
//    Input: ["Alice", "bob", "Ankit", "charlie"]
//    Output: ["Alice", "Ankit"]

// let arr =["Alice", "bob", "Abbie", "charlie"]

// let names=arr.filter((a)=>{
//     return a.toLowerCase().startsWith("a")
// })
// console.log(names);


// 6. Filter even length words.
//    Input: ["one", "three", "four", "six"]
//    Output: ["four",]

// let arr=["one", "three", "four", "six"]
// let evenLength=arr.filter((a)=>{
    
//     return a.length%2==0
    
// })
// console.log(evenLength);
