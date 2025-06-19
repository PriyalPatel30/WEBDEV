// let inp=document.querySelector('input');
// let h1=document.querySelector('h1')
// //  1.    INPUT EVENT
// inp.addEventListener('input',(e)=>{
//     console.log(e); //gives full Input event
//     console.log(e.target); //prints the target tag i.e input tag with attributes
//     console.log(e.target.value);  //prints tagrets value => tag's value thats typed !
//     h1.innerText=e.target.value;  //displays the typed value on screen i.e stored in h1 tag
// })

//  2.    SUBMIT EVENT

let formElement= document.querySelector('form')
formElement.addEventListener('submit',(e)=>{
    e.preventDefault() 

    // console.log(formElement);//gives full form code in console
    // console.log(formElement[0]);//gives name inputs full input details
    // console.log(formElement[0].value);//gives name input's value i.e being typed
    // console.log(formElement[0].value+"  "+formElement[1].value+"  "+formElement[2].value); // All data is given
    
    //      LOCAL STORAGE  ==>  STORING & FECTHING DATA
    let h2 = document.querySelector('h2')
    let h3 = document.querySelector('h3')
    let h4 = document.querySelector('h4')
    //  Object to store data's keys and values
    let data={
        name:formElement[0].value ,
        number:formElement[1].value ,
        password:formElement[2].value
    }

    localStorage.setItem('key',JSON.stringify(data))

    let value=localStorage.getItem('key')
    let realData=JSON.parse(value)
    h2.innerText=realData.name
    h3.innerText=realData.number
    h4.innerText=realData.password

})
// localStorage.setItem(id,456)
// console.log(localStorage.getItem(id));



