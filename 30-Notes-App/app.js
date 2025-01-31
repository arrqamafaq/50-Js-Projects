const addNoteContainer= document.querySelector(".add-note");
const addNoteBtn = document.querySelector("#add-note-btn");
const notesContainer=document.querySelector(".notes");
const noteDeleteBtn= document.querySelector("#edit-note-btn");
const noteEditBtn= document.querySelector("#edit-note-btn");
const addNoteHeadingBtn=document.querySelector("#add-note-with-heading-btn");
const noteHeadingInput=document.querySelector(".add-note-heading-input");


let addedNotes =[];


addNoteBtn.addEventListener("click",()=>{
   addNoteContainer.classList.toggle("active");
})

console.log(noteHeadingInput);

addNoteHeadingBtn.addEventListener("click",()=>{
  if(noteHeadingInput.value === '') return;
  const note = createNote(noteHeadingInput.value);
  addedNotes.push(note);
  renderNotes();
  addNoteContainer.classList.remove("active");
  noteHeadingInput.value="";
})





//eventlistners for editing and removing notes if available

if(addedNotes.length > 0){
    console.log(noteDeleteBtn);
    console.log(noteEditBtn);

    noteDeleteBtn.addEventListener("click",(e)=>{
        console.log(e.target);
    })
    noteEditBtn.addEventListener("click",()=>{
        console.log(e.target);
    })

}



//function to render notes

function renderNotes(){
addedNotes.forEach((note) => {
    notesContainer.appendChild(note);
});
}


//function to open modal when add-note clicked
function addHeadingToNote(){
  
}

//function to create a card
function createNote(heading){
const cardStack= document.createElement("div");
cardStack.classList.add("card-stack");

cardStack.innerHTML=`
        <div class="note-card">
          <h2 class="note-heading">${heading}</h2>
          <div class="tools-container">
            <div class="note-tools">
              <button id="edit-note-btn"><i class="fa-regular fa-pen-to-square"></i></button>
              <button id="delete-note-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
          <div class="note-content">
            <div class="main hidden"></div>
            <textarea id="edit-note-content-textarea"></textarea>
          </div>
          </div>
`
return cardStack;
}