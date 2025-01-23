// function Callback(a){
//     console.log('helloo');
//     setTimeout(()=>{
//         a()
//     },2000)
// }

// Callback(function outer(){

// })


// let arr=[1,2,3,4,5,6]

// arr.reduce((a,b,c,d))



// function step1(fn){
//     setTimeout(()=>{
//         console.log('selecttt');
//         // console.log('hehehehehheheh');
        
//         fn()
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('filteredd');
//         fn()
//     },4000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('captions');
//         fn()
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('post');
//     },2000)
// }

// step1()
// step2()
// step3()
// step4()

// IN THIS CALLING METHOD THE ORDER IS NOT MAINTAINED AND THE LAST STEP IS RUN FIRST AND SO ON 
// -------------------------------------------------------------------------------------------------------------------------------------

// TO RESOLVE THIS CALLBACK HELL IS USED

  // CALLBACK HELL

// s)tep1(function(){
//     step2(function(){
//         step3(function(){
//             step4()
//         })
//     })
// }

// PROMISES

// let promise = new Promise((res,rej)=>{
//     let a=false
//     if(a){
//         res()
//     }

//     else{
//         rej()
//     }
// })

// console.log(promise,'fsduandiwan');


// THEN AND CATCH

// let p= new Promise((res,rej)=>{
//         // rej()
//         res()
// })

// // FOR RESOLVING THEN IS USED
// p.then(()=>{
//     console.log('hellloooo'); 
// })


// // FOR REJECTING CATCH IS USED
// .catch(()=>{
//     console.log('hiiiiiiiiiiiiiiii');
// })



// ASYNC AWAIT 

function step1(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('selectttt')
            console.log('selecttttttt');
            

        },5000)

    })
}
function step2(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res('filtredddddd')
            console.log('filtredddddd');
            

        },2000)

    })
}

 async function call(){
    await step1()

    await  step2()

}
call()



// step1().then((img)=>{
//     console.log(img);
//     return step2().then((fImg)=>{
//         console.log(fImg);
        

//     })
// })