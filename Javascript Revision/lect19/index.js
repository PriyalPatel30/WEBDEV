//PROMISES

let step1=function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Select a photo");
        },5000)
    })
}

let step2=function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Apply Filter");
        },4000)
    })
}

let step3=function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Captions");
        },3000)
    })
}

let step4=function(){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            res("Post");
        },4000)
    })
}

//ORDER ==> Callback Hell => promises => async await

// step1().then((data)=>{
//     console.log(data);
//     return step2()
// }).then((filter)=>{
//     console.log(filter);
//     return step3()
// }).then((cap)=>{
//     console.log(cap);
//     return step4()
// }).then((post)=>{
//     console.log(post);
// })

//      ASYNC AWAIT 

async function call() {
    let data = await step1()
    console.log(data);

    let filter = await step2()
    console.log(filter);
    
    
}
call()