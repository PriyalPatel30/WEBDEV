// let inp = document.querySelector('input')
// let btn = document.querySelector('button')


// inp.addEventListener('input',(a)=>{
//     console.log(a.target.value,'Curent value');

//     // btn.innerText=a.target.value
    
//     btn.style.backgroundColor='pink'
// })








let btn = document.querySelector('button')
let body = document.querySelector('body')

let color = false

btn.addEventListener('click',()=>{
    if(color){
        body.style.backgroundColor='pink'
    // console.log('hiiiiiiiiii');
        color=false
    }
    else{
        body.style.backgroundColor='lightgreen'
        color=true
    }
    
})
