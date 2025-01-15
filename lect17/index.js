// let score=81
// let attendance=56

// if(score>=80 && attendance>=80){
//     console.log("Grade assigned is A");

// }

// else if(score>=60||score<70 && attendance>=70){
//     console.log("Grade assigned is B");

// }

// else if(score>=50||score<60 && attendance>=65){
//     console.log("Grade assigned is C");
// }

// else if(score>30||score<50 && attendance>=50){
//     console.log("Grade assigned is D");
// }

// else{
//     console.log("FAIL");
    
// }


// function sum(a=50,b=30){
//     console.log(a+b);
// }

// sum(5,5)


                                        // ANOTHER WAY OF MAKING A FUNCTION USING ARROW FUNCTIONS

// const call=() =>{
//     console.log(5+5);
    
// }
// call()

// function sum(){
//     console.log('hello');
//     return 5;
// }


let arr=[1,2,'hello',true,undefined]
 
//IN KEYWORD PRINTS THE INDEXES OF THE ARRAY 

for(let i in arr){
    console.log(i);
}

//OF KEYWORD PRINTS THE VALUES OF THE ARRAY 

for(let i of arr){
    console.log(i); 
}