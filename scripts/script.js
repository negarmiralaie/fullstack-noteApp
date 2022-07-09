import * as variables from "./variables.js";
import * as utils from "./utilities.js";

let notes = variables.notes;
const key = variables.key;

let currentIndexClicked;

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", appInit);

  variables.submitBtn.addEventListener("click", submitNote);

  variables.table.addEventListener("click", tableClick);

  variables.modalNote.addEventListener("keydown", () => {
    variables.modalSubmitBtn.disabled = false;
  });

  variables.modalSubmitBtn.addEventListener("click", editNote);
}

function appInit() {
  notes = utils.getFromDB(key);
  utils.tableInit(notes, variables.table);
}

function submitNote(event) {
  event.preventDefault();

  if (!utils.isEmpty(variables.title) && !utils.isEmpty(variables.note)) {
    addNote();
  } else {
    alert("title and note cant be empty!");
  }
}

function addNote() {
  const note = { title: variables.title.value, note: variables.note.value };
  notes.push(note);

  utils.updateTable(note, variables.table, notes);
  utils.updateDB(key, notes);

  utils.clear(variables.note, variables.title);
}

function tableClick(e) {
  currentIndexClicked = utils.findNoteIndex(e.target) - 1;

  if (e.target.classList.contains("show-modal")) {
    variables.modalSubmitBtn.disabled = true;
    //show modal and fill with data
    utils.fillmodal(notes[currentIndexClicked], variables.modalNote);
  }

  if (e.target.classList.contains("delete-note")) {
    if (confirm("sure to delete?")) {
      notes.splice(currentIndexClicked, 1);
      utils.updateDB(key, notes);
      utils.tableInit(notes, variables.table);
    }
  }
}

function editNote(e) {
  e.preventDefault();

  e.target.disabled = true;

  let newNote = variables.modalNote.value;
  notes[currentIndexClicked].note = newNote;

  utils.updateDB(key, notes);
}
