let canvas = document.querySelector('canvas');
let pen= canvas.getContext('2d')

let snakeCells=[[0,0]]
let cell=50;
let direction ='right'
let gameOver=false;
let score=0;

let id=setInterval(()=>{
    draw()
    update()
},300)

let randomCell=generateRandomCell()  //randomly generated food (function)

document.addEventListener("keydown",(e)=>{
    console.log(e);
    if(e.key==='ArrowUp'){
        direction='up'
    }
    else if(e.key==='ArrowDown'){
        direction='down'
    }
    else if(e.key==='ArrowLeft'){
        direction='left'
    }
    else {
        direction='right'
    }
})

function draw() {
    if (gameOver==true) {
        clearInterval(id)
        pen.fillStyle='red';
        pen.font = '50px sans-serif';
        pen.fillText('Game Over ',200,200)
        console.log('hehe');
        return;
    }

     //clearing the prev cell before drawig the new cell
    pen.clearRect(0,0,700,400)
    for(let i of snakeCells){
        pen.fillStyle="red"
        pen.fillRect(i[0],i[1],cell,cell)
    }

    //food generated
    pen.fillStyle="green"
    pen.fillRect(randomCell[0],randomCell[1],50,50)

    
    pen.fillStyle='white';
    pen.font='40px sans-serif';
    pen.fillText(`${score} score`,100,200);
}



//Updation of snake
function update(){
    let headX=snakeCells[snakeCells.length-1][0];
    let headY=snakeCells[snakeCells.length-1][1];

    let newX  // X direction variable
    let newY  // Y direction variable

    //direction mapping if snake
    if(direction=="right"){
        newX=headX+cell
        newY=headY
        if (newX==700) {
            gameOver=true;
        }
    }
    else if(direction=="left"){
        newX=headX-cell
        newY=headY
         if (newX<0) {
            gameOver=true;
        }
    }
    else if(direction=="up"){
        newX=headX
        newY=headY-cell
         if (newY<0) {
            gameOver=true;
        }
    }
    else{
        newX=headX
        newY=headY+cell
         if (newY==400) {
            gameOver=true;
        }
    }

    if (newX==randomCell[0] && newY==randomCell[1]) {
        randomCell=generateRandomCell()
        score=score+1;
    } 
    else{
        snakeCells.shift()
    }

    snakeCells.push([newX,newY])
}


function generateRandomCell() {
    return[
        Math.floor((Math.random()*650)/50)*50,
        Math.floor((Math.random()*350)/50)*50
    ]
}
