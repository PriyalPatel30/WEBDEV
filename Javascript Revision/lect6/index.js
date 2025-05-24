// let str="  JavaScript is Awesome!   ";

// console.log("Original String: " + str+"'");

// //1. length
// console.log("Length: " + str.length);   //includes spaces

// //2. trim
// console.log("Trimmed String: " + str.trim());   //removes spaces

// //3. toUpperCase()
// console.log("Uppercase String: " + str.toUpperCase());   //converts to uppercase

// //4. toLowerCase()
// console.log("Lowercase String: " + str.toLowerCase());   //converts to lowercase

// //5. includes
// console.log("Includes 'Awesome': " + str.includes("Awesome"));   //returns true if the string contains the specified substring

// //6. startsWith
// console.log("Starts with 'Java': " + str.startsWith("Java"));   //returns true if the string starts with the specified substring

// //7. endsWith
// console.log("Ends with '!   ': " + str.endsWith("!   "));   //returns true if the string ends with the specified substring

// //8. indexOf
// console.log("Index of 'is': " + str.indexOf("is"));   //returns the index of the first occurrence of the specified substring

// //9. lastIndexOf
// console.log("Last Index of 'a': " + str.lastIndexOf("a"));   //returns the index of the last occurrence of the specified substring

// //10. charAt
// console.log("Character at index 5: " + str.charAt(5));   //returns the character at the specified index

// //11. substring (from index 2 to 10)
// console.log("Substring (2,10):", str.substring(2,10));   //returns the substring between the specified indices

// //12. slice
// console.log("Slice :", str.slice(2,-1));    //returns the substring between the specified indices (negative index counts from the end of the string)

// //13. split
// console.log("Split by space:", str.trim().split(" "));   //splits the string into an array of substrings based on the specified separator

// //14. replace
// console.log("Replace 'Awesome' with 'Powerful':", str.replace("Awesome", "Powerful"));   //replaces the first occurrence of the specified substring with the specified replacement string

// //15. repeat
// console.log("Repeat 3 times:", "JS".repeat(3));   //repeats the string a specified number of times




//QUESTION 
// let str1="aaabbccaa"  //a3b2c2
// let newStr=""
// let count=1

// for(let i=0;i<str1.length;i++){
//     if(str1[i]==str1[i+1]){
//         count++
//     }
//     else{
//         newStr+=str1[i]+count
//         count=1
//     }
// }
// console.log(newStr);


//abc
// let str2="aaabbcca"  
// let removeDuplicates="abc"

// for(let i=0;i<str2.length;i++){
//     if(!removeDuplicates.includes((str2[i]))){
//         removeDuplicates=str2[i]
//     }
    
// }
// console.log(removeDuplicates);


let arr=[1,2,3,4,5,6]
let arr1=[2,3,5,2,5,6,10]
//output [1,2,3,4,5,6,10]

