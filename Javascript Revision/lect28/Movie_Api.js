
// let btn=document.querySelector('button')
// btn.addEventListener('click',movie_Update)
// function movie_Update() {
//     let searchText=document.querySelector('input').value;
//     let apiData=`https://api.tvmaze.com/search/shows?q=${searchText}`

//     fetch(apiData).then((res)=>{
//         return res.json()

//     }).then((data)=>{
//         console.log(data);  //shows data in console
//         showData(data)    // displays data on screen
        
//     })
// }

// let div=document.querySelector('div')
// function showData(data) {
//     for(let i of data){
//         let h2=document.querySelector('h2')
//         h2.innerText=
//     }
// }


// let btn=document.querySelector('button')
// let input=document.querySelector('input')
// let list=document.getElementById('list')


// btn.addEventListener('click',function(){
//     let searchText=input.value;
//     fetchData(searchText);
//     input.value='';
// })


// function fetchData(searchText){
//     axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
//     .then(function(response){
//         console.log(response.data)
//         manipulationDom(response.data)
        
//     })
// }

// function manipulationDom(datas){
//     for(let data of datas){
//         let figure = document.createElement('figure');
    
//         if(data.show.image){
//             figure.innerHTML = `
//             <img src="${data.show.image.original} />
//             <br/>
//             <h2> Genre: ${data.show.genres[0]}</h2>
//             `

//             list.appendChild(figure)
            
//         }
//     }
// }


let input = document.querySelector('input');
let btn = document.querySelector('button');
let list = document.getElementById('list');


btn.addEventListener('click' , function(){
    let searchText = input.value;
   fetchData(searchText);
    input.value = '';
})

function fetchData(searchText){
    axios.get(`https://api.tvmaze.com/search/shows?q=${searchText}`)
    .then(function(response){
        console.log(response.data);
        manipulateDom(response.data);
    })
}


function manipulateDom(datas){
    for(let data of datas){
        let figure = document.createElement('figure');

        if(data.show.image){
            figure.innerHTML = `
            <img src=${data.show.image.original} />
            <br/>
            <h2> Genre: ${data.show.genres[0]} </h2>
            `
            list.appendChild(figure )
        }
    }
}