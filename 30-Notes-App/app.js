const addNoteContainer= document.querySelector(".add-note");
const addNoteBtn = document.querySelector("#add-note-btn");
const notesContainer=document.querySelector(".notes");
const noteDeleteBtn= document.querySelector("#edit-note-btn");
const noteEditBtn= document.querySelector("#edit-note-btn");
const addNoteHeadingBtn=document.querySelector("#add-note-with-heading-btn");
const noteHeadingInput=document.querySelector(".add-note-heading-input");


//array to store notes data or retrieve notes data from local
let addedNotes = getNotes()||[];
console.log(addedNotes);
renderNotes();

//open heading
addNoteBtn.addEventListener("click",()=>{
   addNoteContainer.classList.toggle("active");
});

console.log(noteHeadingInput);

addNoteHeadingBtn.addEventListener("click",()=>{
  if(noteHeadingInput.value === '') return;

  const note = {};
  note.id=noteHeadingInput.value;
  note.text="";
  addedNotes.push(note);
  console.log(addedNotes);
  saveNotes(addedNotes);
  renderNotes();
  addNoteContainer.classList.remove("active");
  noteHeadingInput.value="";
})

//function to render notes

function renderNotes(){
  notesContainer.innerHTML=``;
addedNotes.forEach((note) => {
    const newNote= createNote(note);
    notesContainer.appendChild(newNote);
});
}

//function to create a card
function createNote(note){
const cardStack= document.createElement("div");
cardStack.classList.add("card-stack");

cardStack.innerHTML=`
        <div class="note-card">
          <h1 class="note-heading">${note.id}</h1>
          <div class="tools-container">
            <div class="note-tools">
              <button id="edit-note-btn"><i class="fa-regular fa-pen-to-square"></i></button>
              <button id="delete-note-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
          </div>
          <div class="note-content">
            <div class="main hidden">${marked.parse(note.text)}</div>
            <textarea id="edit-note-content-textarea"  placeholder="type.." >${note.text}</textarea>
          </div>
          </div>
`
const editBtn= cardStack.querySelector("#edit-note-btn");
const deleteBtn= cardStack.querySelector("#delete-note-btn");
const mainText =  cardStack.querySelector(".main");
const textArea = cardStack.querySelector("#edit-note-content-textarea");

if(note.text !==''){
  mainText.classList.remove("hidden");
  textArea.classList.add("hidden");
}

editBtn.addEventListener("click",()=>{
  mainText.classList.toggle("hidden");
  textArea.classList.toggle("hidden");
  textArea.focus();
});

textArea.addEventListener("change",()=>{
  const content = textArea.value;
  note.text=content;
  mainText.innerHTML = marked.parse(note.text);
  saveNotes(addedNotes);
})

deleteBtn.addEventListener("click",(e)=>{
  addedNotes = addedNotes.filter((item)=> item.id !== note.id);
  console.log(addedNotes);
  saveNotes(addedNotes);
  renderNotes();
})

return cardStack;
}


//function to save data to local storage
function saveNotes(notes){
  const addedNotesString= JSON.stringify(notes);
  localStorage.setItem("notes",addedNotesString);
}

//function to get saved data
function getNotes(){
  const savedNotes = localStorage.getItem("notes")
  return JSON.parse(savedNotes);
}

