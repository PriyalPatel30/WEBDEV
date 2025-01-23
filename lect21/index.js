// var a=56;
// {
//     var a=15
//     console.log(a);
// }
// console.log(a);


// Scopes
// global
// var a=50
// // let a=50
// console.log(window.a);


// let const 
// {
//     let a=58
//     console.log(a);
    
// }
// console.log('ihihihhihi,'a);
// // in syntax error the whole code is not executed

// VAR 
// var a=11
// {
//     console.log(a); 
// }

// function sum(){
//     var a=5
//     console.log(a); 
// }
// sum()
// console.log(a);




// function outer(){
//     let a=66
//     function inner(){
//         console.log(a);
        
//     }
//     inner()
// }
// outer()


// CALL,APPLY,BIND 

let obj={
    firstName:"Narendra",
    lastName:"Modi",
    fullName:function(city,age){
        console.log(this.firstName+" "+this.lastName+" "+ city+" "+ age);
        
    }
}
let user={
    firstName:"hritik",
    lastName:"roshan",
}
obj.fullName.apply(user,["Mumbai",52])
// obj.fullName.call(obj)