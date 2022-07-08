import * as variables from "./variables.js";
import * as utils from "./utilities.js";

let notes = variables.notes;
const key = variables.key;

eventListener();

function eventListener() {
  document.addEventListener("DOMContentLoaded", appInit);
  variables.submitBtn.addEventListener("click", submitNote);
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
