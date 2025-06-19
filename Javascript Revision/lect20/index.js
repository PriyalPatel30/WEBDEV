//       DOM ==> DOCUMENT OBJECT MODEL

// let a=document.getElementById("one");
// Id returns a single value or object 

// let b=document.getElementsByClassName("two"); // [h1 h2]
// Class returns an array of values of that class


// b.style.color='red'

//doesnt give color as 'b' is an array and cant access an array for style
//to acces it, use b[0] i.e indexes !


// for(let i of b){
//     i.style.color='red';
// } 

//gives all elements of b array color=red


// console.log(a);
// console.log(b);


// let a=document.getElementById("one");
// console.log(a.innerText);  //gives the text inside the html tag
// a.style.color="beige" //changes color of text
// a.style.backgroundColor='black'

// QUERY SELECTORS

// let h1=document.querySelector(".two");   //selects 1 element only
// console.log(h1);

// let h1=document.querySelectorAll(".two");   // selects all elements
// console.log(h1);

// let a=document.querySelector('a')

// console.log(a.getAttribute('href'));  
// //gets element having the given attribute

// a.setAttribute("href","https://www.flipkart.com/") 
// //changes the value of attribute, when the link is opened flipkart opens & not google

//      DYNAMIC CREATION OF ELEMENT USING APPEND

const h1=document.createElement('h1');      //created a var names h1
const div=document.querySelector('div');    //selected div
h1.innerText="hello"    //h1's text set to hello
div.append(h1)          //h1 is appended or added to div
console.log(div);       //prints div ==> hello

