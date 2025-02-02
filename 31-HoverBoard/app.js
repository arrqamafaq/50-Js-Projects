const setSize=document.querySelector("input");
const container=document.querySelector(".grid-container");

//default grid
createGrid(setSize.value);


//set size
setSize.addEventListener("input",()=>{
    console.log("Grid "+setSize.value);
    createGrid(setSize.value);
})



//function to createGrid
function createGrid(size){
    container.innerHTML=``;
    //to determine rows and cols
    const gridSize=Math.ceil(Math.sqrt(size));
     console.log(gridSize);

    //creating the grid
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows= `repeat(${size},1fr)`;

    //create boxes
    for(i=0;Math.sqrt(i)<size;i++){
        const box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
    }

}



//function to get random color
function getRandomColor(){

}
