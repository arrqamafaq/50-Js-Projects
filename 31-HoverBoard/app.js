const setSize=document.querySelector("input");
const container=document.querySelector(".grid-container");

//default grid
createGrid(setSize.value);

let debounceTimer;
//set size
setSize.addEventListener("input",()=>{
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        console.log("Grid " + setSize.value);
        createGrid(setSize.value);
    }, 300); // Delays execution to prevent excessive re-rendering
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

   // Use DocumentFragment for better performance
   const fragment = document.createDocumentFragment();
    
   for (let i = 0; Math.sqrt(i) < size; i++) {
       const box = document.createElement("div");
       box.classList.add("box");
       fragment.appendChild(box);
   }
   
   container.appendChild(fragment); // Append all at once for better performance

}



//function to get random color
function getRandomColor(){

}
