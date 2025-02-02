const setSize=document.querySelector("input");
const container=document.querySelector(".grid-container");
const checkbox=document.querySelector("#keep-color");


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

    //creating the grid
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows= `repeat(${size},1fr)`;

   // Use DocumentFragment for better performance
   const fragment = document.createDocumentFragment();
    
   for (let i = 0; Math.sqrt(i) < size; i++) {
       const box = document.createElement("div");
       box.classList.add("box");
       fragment.appendChild(box);
       box.addEventListener('mouseover',()=>setColor(box));
           box.addEventListener('mouseout',()=> {
            if(!checkbox.checked) {
                removeColor(box)
       }});
       
   }
   
   container.appendChild(fragment); // Append all at once for better performance
// addColor();
}

getRandomColor();

//function to get random color
function getRandomColor(){

    const red=Math.floor(Math.random()*256);
    const blue=Math.floor(Math.random()*256);
    const green=Math.floor(Math.random()*256);

     // Convert each value to a two-digit hexadecimal
     const color = `#${red.toString(16).padStart(2, "0")}${green.toString(16).padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;
    return color;
}

//function to setcolor
function setColor(element){
    const color = getRandomColor();
    element.style.background=color;
    element.style.boxShadow=`0 0 2px ${color},0 0 10px ${color}`;

}

//function remove color
function removeColor(element){
    element.style.backgroundColor="#1d1d1d";
    element.style.boxShadow="0 0 2px #000";
}