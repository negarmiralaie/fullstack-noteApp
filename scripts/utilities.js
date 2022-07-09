export function isEmpty(htmlElement) {
  return htmlElement.value == "";
}

export function getFromDB(key) {
  let data = [];

  data = JSON.parse(localStorage.getItem(key));
  if (data == null) {
    data = [];
  }

  return data;
}

export function updateDB(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function updateTable(note, htmlElement, notes) {
  let element = document.createElement("tr");
  element.innerHTML = fillElement(notes.length, note.title);

  htmlElement.firstElementChild.appendChild(element);
}

export function tableInit(notes, htmlElement) {
  htmlElement.firstElementChild.innerHTML = "";

  notes.map((note, index) => {
    let element = document.createElement("tr");
    element.innerHTML = fillElement(index + 1, note.title);
    htmlElement.firstElementChild.appendChild(element);
  });
}

export function clear(...htmlElements) {
  htmlElements.map((element) => {
    element.value = "";
  });
}

export function findNoteIndex(element) {
  return Number(
    element.parentNode.parentNode.parentNode.firstElementChild.textContent
  );
}

export function fillmodal(note, element) {
  element.value = note.note;
}

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
