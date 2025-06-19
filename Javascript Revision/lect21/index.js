// const arr=[
//        "https://plus.unsplash.com/premium_photo-1748035806808-80c32ffc7430?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//        "https://plus.unsplash.com/premium_photo-1748204567545-3bc8fd164d30?q=80&w=1235&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//        "https://images.unsplash.com/photo-1745282322383-8ec67cc895b6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ]

// const imageEl = document.querySelector('img');
// let num=0;
// setInterval(function() {
//     imageEl.setAttribute('src',arr[num]);
//     num=(num+1) % arr.length;
// },2000)
 


//        # EVENTS #

//  METHOD 1 ==> DIRECT USING ONCLICK EVENT ATTRIBUTE IN HTML

// function fun1(){
//     console.log('hello');
//     //prints hello the number of times the button is clicked which says 'Save'.    
// }

// //  METHOD 2 ==> ID,QUERYSELECTOR ,USING VARIABLE FOR STORING BUTTON AND APPLYING ONCLICK ON THAT VARIABLE

// let btn= document.querySelector('#one'); //selecting btn of id=one
// btn.onclick=function(){
//     console.log('byee')
//     //prints byeee the number of times the button is clicked which says 'Click'.
// }

//     ADD EVENT LISTENER 

let btn= document.querySelector('#one');  //selects btn of id one
// let body=document.querySelector('body');  //selects body tag of html
let circleBox = document.querySelector('#circleBox');

let isBool=true;

btn.addEventListener('click',function(){
    if(isBool){
        circleBox.style.backgroundColor='red'; 
        circleBox.style.borderRadius = '50%'; 

        //changes bg color on clicking the btn
    }
    else{
        circleBox.style.backgroundColor='pink';
        circleBox.style.borderRadius = '0%';   // square again

    }
    isBool=!isBool;
})