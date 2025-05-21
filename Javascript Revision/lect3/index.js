// // ARRAY 
// let arr=[1,2,3,4,"helllooo",true]
// console.log(arr[2]);
// console.log(arr[5]);
// console.log(arr[6]);  //undefined => there is no 6th index in arr

// console.log("hiiii");

// function sum(){
//     console.log('this is sum function ');
// }
// //function calling
// sum()

// //PARAMETERIZED FUNCTION
// function sumfn(a=20,b=10) {
//     console.log(a+b+" this is sum func with parameter");
    
// }
// sumfn(10,5246);  //parameter passed

// ARROW FUNCTION
// let show=(a,b)=> {
//     console.log(a+b);
    
// }
// show(2,5)

// QUESTION
// let array=[1,2,3,4,5,6,7,8]
// for(let i=array.length-1;i>=0;i--){
//     console.log(array[i]);
// }

//          for of loop syntax 

// let arr=[1,2,3,4,5,5,56]

// for(let i of arr){
//     console.log(i);

// }

//          for in loop 
// for(let i in arr){
//     console.log(i);
// }



// let arr=[1,2,3,4,5,6]
// function sum(data){
//     console.log(data);
//     //using count print sum of elements
//     let count=0 

            //for of loop

//     for(let i of data){        
//         count=count+i
//     }
//     console.log("the sum is "+count);
// }
// sum(arr)

// let objarr=[{id:1,name:"pri"},{id:2,name:"Erica"}]
// for(let i of objarr){
//     console.log(i.name);
//         console.log(i.id);
// }

        // METHODS => DECLARED INSIDE OBJECT

// let obj={
//     id:4,
//     firstname:"lucy",
//     lastname:"jacob",
//     fullName:function(){
//         console.log(obj.firstname+" "+obj.lastname);
//     }
// }
// obj.fullName()


        //SOME IMPORTANT FUNCTIONS => PUSH,POP,UNSHIFT,SHIFT 

// let arr=[1,2,3,4,5,6]
// //push adds value from back of array
// arr.push(10)
// console.log(arr);
// //pop deleted from back of array
// arr.pop()
// console.log(arr);
// //unshift adds value from start of array
// arr.unshift(10)
// console.log(arr);
// //shift deletes value from start of array
// arr.shift()
// console.log(arr);


// function display(){
//     return 5
//     console.log('hiiii');
// }
// // console.log(display());
