let button = document.querySelectorAll("button")
let inp=document.querySelector('input');
// console.log(button);

for(let btn of button){
    btn.addEventListener('click',()=>{
        let text=btn.innerText
        console.log(text);
        
        if (text=='C') {
            inp.value=""

        }
        else if(text=='='){
            inp.value=eval(inp.value)
        }
        else{
            inp.value=inp.value+text
        }
    })
}
