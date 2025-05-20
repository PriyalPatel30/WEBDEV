// 1. Directly define the function and use that to print
// function fun1(){
//     console.log('hellooo!!');
    
// }

// // 2. Select the button using queryselector 
// let btn = document.querySelector('#one')

// btn.onclick=function(){
//     console.log('byyyyeeeeeeee');
    
// }

// //3. By using queryselector and adding addEventListener in it.
// // let btn1 = document.querySelector('#two')
// btn1.addEventListener('click',()=>{
//     console.log('goooooooooo');
    
// })

// -----------------------------------------------------------------------------------------------------------------------


// let btn1 = document.querySelector('#two')
// let body = document.querySelector('body')
// let h1 = document.querySelector('h1')

// //  body.style.backgroundColor = 'yellow'
// btn1.addEventListener('click',()=>{
//     body.style.backgroundColor='pink'
//     console.log('hiiiiiiiiii');
//     h1.innerText='this is h1 tag'
//     alert('alert message')
// })
// -----------------------------------------------------------------------------------------------------------------------

// Adding eventListener to the input field 

let inp = document.querySelector('input')

let h2 = document.querySelector('h2')

inp.addEventListener('input',(e)=>{
    console.log(e.target.value,'Curent value of input field ');

    //rReplacing the current value of the h2 tag with the current input target value
    h2.innerText=e.target.value
})


