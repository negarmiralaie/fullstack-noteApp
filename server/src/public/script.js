////////// import created modules //////////
import * as variables from "./variables.js";
import * as utils from "./utilities.js";
////////// import created modules //////////

////////// assing variables that will be use very much for shorter syntax //////////

let notes = variables.notes;

////////// assing variables that will be use very much for shorter syntax //////////

let currentIndexClicked; //for save the table row user click

////////// events listeners //////////

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", appInit);

  variables.submitBtn.addEventListener("click", submitNote);

  variables.table.addEventListener("click", tableClick);

  //when the note is being changed , save changes button will be enabled
  variables.modalNote.addEventListener("keydown", () => {
    variables.modalSubmitBtn.disabled = false;
  });

  variables.modalSubmitBtn.addEventListener("click", editNote);
}
////////// events listeners //////////

//function for initializing the app and fetch data and fill up data table
function appInit() {
  notes = utils.getFromDB();
  utils.tableInit(notes, variables.table);
}

//function for submit a note to DB and data table , also check title and note
function submitNote(event) {
  event.preventDefault();

  //check value of title and note for not bieng null
  if (!utils.isEmpty(variables.title) && !utils.isEmpty(variables.note)) {
    addNote();
  } else {
    alert("title and note cant be empty!");
  }
}

//function for add note to DB and data table
function addNote() {
  //push the created note to notes array
  const note = { title: variables.title.value, description: variables.note.value };

  axios
  .post("http://localhost:3000/notes/create", note)
  .then((response) => {
    //const users = response.data.data;
    console.log(response);
  })
  .catch((error) => console.error(error));

  //update table and DB
  let noteID = utils.insertNoteToDB(note);
  note.id = noteID;
  notes.push(note);

  utils.updateTable(note, variables.table, notes.length);

  //clear the inputs
  utils.clear(variables.note, variables.title);
}

//function for check which button of table is clicked , show note or delete note
function tableClick(e) {
  //find the table row that is triggered
  currentIndexClicked = utils.findNoteIndex(e.target) - 1;

  //if contain "show-modal" class , show note button is clicked
  if (e.target.classList.contains("show-modal")) {
    //save changes button is disabled by default , enabled when note is being changed
    variables.modalSubmitBtn.disabled = true;
    //show modal and fill up with note data
    utils.fillmodal(notes[currentIndexClicked], variables.modalNote);
  }

  //if contain "delete-note" class , delete note button is clicked
  if (e.target.classList.contains("delete-note")) {
    //ask user to delete note
    if (confirm("sure to delete?")) {
      //delete the note from notes array
      notes.splice(currentIndexClicked, 1);

      //delete the note from DB
      utils.deleteNoteFromDB(notes[currentIndexClicked].id);

      //update data table with new data
      utils.tableInit(notes, variables.table);
    }
  }
}

//function for edit the note
function editNote(e) {
  e.preventDefault();

  //save changes button will be disabled again
  e.target.disabled = true;

  //store the new note
  let newNote = variables.modalNote.value;
  //update the note.note property
  notes[currentIndexClicked].note = newNote;

  //update note in DB
  utils.updateNoteInDB(notes[currentIndexClicked]);
}
