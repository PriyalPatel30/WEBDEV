//Internal working for setTimeout
// setTimeout(()=>{
//     console.log('A');
    
// },0)
// setTimeout(()=>{
//     console.log('B');
    
// },1000)
// console.log('C');

//  CALLBACK HELL

        // select photo => 5 seconds
        // filter  => 4
        // captions => 3
        // post => 2

// function step1(){
//     setTimeout(()=>{
//         console.log('Select a photo');
        
//     },5000)
// }

// function step2(){
//     setTimeout(()=>{
//         console.log('Apply Filter');
        
//     },4000)
// }

// function step3(){
//     setTimeout(()=>{
//         console.log('Captions');
        
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('Post');
        
//     },2000)
// }
// step1()
// step2()
// step3()
// step4()
// ==> this code executes in order of time not the order in which it should run originally: post-caption-filter-select photo

//now using callback hell to resolve the problem

// function step1(fn){
//     setTimeout(()=>{
//         console.log('Select a photo');
//         fn()
//     },5000)
// }

// function step2(fn){
//     setTimeout(()=>{
//         console.log('Apply Filter');
//         fn()
//     },4000)
// }

// function step3(fn){
//     setTimeout(()=>{
//         console.log('Captions');
//         fn()
//     },3000)
// }

// function step4(){
//     setTimeout(()=>{
//         console.log('Post');
        
//     },2000)
// }

// step1(()=>{
//     step2(()=>{
//         step3(()=>{
//             step4()
//         })
//     })
// })

//  PROMISES 

let promise = new Promise((res,rej)=>{
//     //res()   //promise fulfilled or resolved 
//     rej()   //promise rejected 

let isBool=0 
if (isBool) {
    res('heheehe')
} else {
    rej('error')
}
})

promise.then((hehe)=>{
    console.log(hehe);
    
}).catch((err)=>{
    console.log(err);
    

})

// console.log(promise);

// RESOLVE --> .then
// REJECT --> .catch

