let form = document.querySelector("#myList");
let itermComtainer = document.getElementById("iterm-comtainer");

let taskHOlder = {
  task: "",
  domEl: {},
};

const editTask = (updates) => {
  taskHOlder.domEl.childNodes[0].textContent = updates;
  taskHOlder = {};
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formInput = document.getElementById("listIterm");

  // prevent empty list submition
  let listIterm = formInput.value;

  if (taskHOlder.task) {
    editTask(formInput.value);

    formInput.value = "";
    return;
  }

  formInput.value = "";

  if (listIterm === "") {
    return alert("Plaese enter iterm name...");
  }

  // create a an html element li for new list iterms

  let newIterms = document.createElement("li");
  newIterms.innerText = listIterm;
  itermComtainer.appendChild(newIterms);

  // create a span to carry our buttons

  let actionBnt = document.createElement("span");
  newIterms.appendChild(actionBnt);

  // edit button
  let editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fa-sharp fa-solid fa-pen-to-square"></i>`;
  actionBnt.appendChild(editBtn);

  // iterms delete btn
  let dlBtn = document.createElement("button");
  dlBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  actionBnt.appendChild(dlBtn);

  // adding function to the delete button
  dlBtn.addEventListener("click", () => {
    newIterms.remove();
  });

  // add the edit iterms function

  editBtn.addEventListener("click", () => {
    formInput.value = newIterms.innerText;
    taskHOlder.task = newIterms.innerText;
    taskHOlder.domEl = newIterms;
  });

  // console.log(newIterms).value
  console.log(listIterm);
});
