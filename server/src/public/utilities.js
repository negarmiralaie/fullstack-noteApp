//function for check an htmlElement value is empty or not
export function isEmpty(htmlElement) {
  return htmlElement.value == "";
}

//function for get the note via its id (if id was empty return all notes)
export function getFromDB(id = "") {
  let data = [];
  // call api for get info
  /*
    let data = [];

  data = JSON.parse(localStorage.getItem(key));
  if (data == null) {
    data = [];
  }

  return data;
  */

  return data;
}

//function for add a note to DB (data is a object)
export function insertNoteToDB(data) {
  //localStorage.setItem(key, JSON.stringify(data));
  //here should return created ID

  return "abc123";

  axios
    .post("http://localhost:3000/notes/create", {
      title: data.title,
      description: data.note,
    })
    .then((response) => {
      //const users = response.data.data;
      console.log(response);
    })
    .catch((error) => console.error(error));
}

//function for delete a note from DB (id of note is argument)
export function deleteNoteFromDB(id) {
  //call api for delete note with id
}

//function for update a note in DB (data is a object , just replace the object in DB with its id)
export function updateNoteInDB(data) {
  //call api for update note with id=data.id => then =>
  // description object in DB with id=data.id = data.note
}

//function for update and add new note to data table
export function updateTable(note, htmlElement, notesLength) {
  let element = document.createElement("tr");
  element.innerHTML = fillElement(notesLength, note);

  htmlElement.firstElementChild.appendChild(element);
}

//function for initializing the data table
export function tableInit(notes, htmlElement) {
  htmlElement.firstElementChild.innerHTML = "";

  notes.map((note, index) => {
    let element = document.createElement("tr");
    element.innerHTML = fillElement(index + 1, note);
    htmlElement.firstElementChild.appendChild(element);
  });
}

//function for clear the value of passed elements
export function clear(...htmlElements) {
  htmlElements.map((element) => {
    element.value = "";
  });
}

//function for find note index in table base on clicking on the table
export function findNoteIndex(element) {
  return Number(
    element.parentNode.parentNode.parentNode.firstElementChild.textContent
  );
}

//function for find the note data-id in table base on clicking on the table
export function findNoteDataID(element) {
  return element.parentNode.parentNode.parentNode.firstElementChild.dataset.id;
}

//functino for fill the show modal via passed html element(textarea) and information(note.note property)
export function fillmodal(note, element) {
  element.value = note.note;
}

//functino for fill and create the table data row via number of row and note tile
function fillElement(number, note) {
  return `
    <th data-id=${note.id}>${number}</th>
    <td>${note.title}</td>
    <td>
      <button
        class="btn btn-outline-primary rounded-circle btn-sm show-modal"
        data-bs-target="#modal"
        data-bs-toggle="modal"
      >
        <i class="bi bi-eye show-modal"></i>
      </button>
    </td>
    <td>
      <button class="btn btn-outline-danger rounded-circle btn-sm delete-note">
      <i class="bi bi-trash delete-note"></i>
      </button>
    </td>
`;
}
