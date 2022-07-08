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

function fillElement(number, title) {
  return `
    <th>${number}</th>
    <td>${title}</td>
    <td>
      <button
        class="btn btn-outline-primary rounded-circle btn-sm"
        data-bs-target="#modal"
        data-bs-toggle="modal"
      >
        <i class="bi bi-eye"></i>
      </button>
    </td>
    <td>
      <button class="btn btn-outline-danger rounded-circle btn-sm">
      <i class="bi bi-trash"></i>
      </button>
    </td>
`;
}
