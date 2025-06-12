//THIS KEYWORD

// console.log("i am different");
// console.log(window);
// console.log(window==this); // true



//Normal fucntion using this keyword
//=> in normal func,'this' points to the object

// let obj={
//     name:'alice',
//     money:20000,
//     hasMoney:function(){
//         // console.log("Moneyyyyy");
//         console.log(this); //gives objects keys and values respectively

//     }
// }
// obj.hasMoney()

//This keyword is not applicable in arrow function

// let obj1={
//     name:'lucy',
//     amount:5000,
//     hasAmount:function(){
//         ()=>{
//             console.log(this);
//             console.log('this keyword in arrow func');
            
            
//         }
//     }
// }
// obj1.hasAmount()


//Variables declared with var keyword goes to the window because of its scope, and hence cannot be accessed
//whereas varibales declared with let and const doesnt go to window and thus can be accessed

//PROTOTYPE
    // ARRAY

let arr=[1,2,3,4]
console.log(arr); //[1,2,3,4]
console.log(arr.name) //arr name is undefined

// ARRAY PROTOTYPE CHECKING CYCLE: arr=> Array.prototype=> Object.prototype=> NULL 

    //OBJECT
let obj={
    id:1
}
console.log(obj.name);//undefined as there's no key with key as 'name' in obj
// OBJECT CYCLE: Object.prototype=> null

    //STRING
 let str='Hello'


