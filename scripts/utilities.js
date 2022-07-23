//function for check an htmlElement value is empty or not
export function isEmpty(htmlElement) {
  return htmlElement.value == "";
}

//function for extract info from DB via passed key
export function getFromDB(key) {
  let data = [];

  data = JSON.parse(localStorage.getItem(key));
  if (data == null) {
    data = [];
  }

  return data;
}

//function for update DB via key and newData for set
export function updateDB(key, data) {
  //localStorage.setItem(key, JSON.stringify(data));

  const fetchUsers = () => {
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
  };

  fetchUsers();
}

//function for update and add new note to data table
export function updateTable(note, htmlElement, notes) {
  let element = document.createElement("tr");
  element.innerHTML = fillElement(notes.length, note.title);

  htmlElement.firstElementChild.appendChild(element);
}

//function for initializing the data table
export function tableInit(notes, htmlElement) {
  htmlElement.firstElementChild.innerHTML = "";

  notes.map((note, index) => {
    let element = document.createElement("tr");
    element.innerHTML = fillElement(index + 1, note.title);
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

//functino for fill the show modal via passed html element(textarea) and information(note.note property)
export function fillmodal(note, element) {
  element.value = note.note;
}

//functino for fill and create the table data row via number of row and note tile
function fillElement(number, title) {
  return `
    <th>${number}</th>
    <td>${title}</td>
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
