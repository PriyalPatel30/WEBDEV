// fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>{
//     // console.log(res);
//     return res.json()

// }).then((data)=>{
//     // console.log(data);
//     data.map((result)=>{
//         console.log(result);   //gives whole data
//         showData(result)    //callig the data to tbe shown, show function
        
//     })
// })

// let div=document.querySelector('div')
// let li=document.querySelector('li')
// let h3=document.querySelector('h3')

// function showData(res) {
//     li.innerText=res.title  // list's innertext is the title of the res parameter
//     h3.innerText=res.id     // h3's innertext the id of the res
//     div.append(h3,li) // appends both h3 and list in the div
// }

// let city="delhi"
// let key="9f6290d6cda9a36a63755fadee71f83d"
// let apiData=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`

// fetch(apiData).then((res)=>{
//     return res.json()

// }).then((data)=>{
//     console.log(data);
    
// })



// let inp=document.querySelector('input')

let btn=document.getElementById('button')

btn.addEventListener("click",weatherUpdate)

function weatherUpdate() {

    let city=document.getElementById('cityname').value
    let key="9f6290d6cda9a36a63755fadee71f83d"
    let apiData=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`


    fetch(apiData).then((res)=>{
        return res.json()

    }).then((data)=>{
        console.log(data);  //shows data in console
        showData(data)    // displays data on screen
        
    })
}

let div=document.querySelector('div')
function showData(data) {
    let h2=document.querySelector('h2')
    h2.innerText="The temp is "+ data.main.temp +" and it feels like "+ data.main.feels_like +" today."
    div.append(h2)
}
