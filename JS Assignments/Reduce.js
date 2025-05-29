// 7. Create a frequency count of characters.
//    Input: ["a", "b", "a", "c", "b"]
//    Output: {a: 2, b: 2, c: 1}

// let arr=["a", "b", "a", "c", "b"]
// let frequencyCount = arr.reduce((a,b)=>{
//     if(a[b]!==undefined){
//         a[b]=a[b]+1
//     }
//     else{
//         a[b]=1
//     }
//     return a
// },{})
// console.log(frequencyCount);

//  8. Concatenate all strings in array into a sentence.
//    Input: ["Hello", "world", "from", "reduce"]
//    Output: "Hello world from reduce"

// let arr=["Hello", "world", "from", "reduce"]
// let sentenceArr=arr.reduce((a,b)=>{
//     return   a+" "+b
// })
// console.log(sentenceArr);



// 9. Find the average of all numbers.
//    Input: [10, 20, 30]
//    Output: 20

// let arr=[10, 20, 30]

// let average=arr.reduce((a,b)=>{
//     return a+b
// })
// console.log(average/arr.length);


// 10. Count total vowels in all words.
//     Input: ["apple", "banana"]
//     Output: 5

// let arr=["apple", "banana"]
// let vowels=['a','e','i','o','u']
// let count=0
// count=arr.reduce((a,b)=>{
//     for(let i=0;i<b.length;i++){
//         let letter = b[i].toLowerCase();
//        if(vowels.includes(letter)){
//             a++
//        }
//     }
//    return a
// },0)
// console.log(count);
