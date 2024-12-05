// Definitions
const MOCKED_DATA = [
  //Explicit
  { id: 1, name: "ménage", completed: false },
  { id: 2, name: "devoirs", completed: true },
  { id: 3, name: "courses", completed: false },
  { id: 4, name: "douche", completed: false },
];

let nextId = 0;

async function mock_fetch(ms) {
  // va chercher les données distantes
  await new Promise((resolve) => setTimeout(resolve, ms));
  // appelle la fonction qui stocke les données
  storeData(MOCKED_DATA);
  getData();
  return MOCKED_DATA;
}

function storeData(data) {
  // récupère et combine les données avant de les remettre dans le local storage
  let storedData = JSON.parse(localStorage.getItem("todos")) || [];
  storedData.push(...data);
  // nextId = storedData.length + 1;
  localStorage.setItem("todos", JSON.stringify(storedData));
}

function getData() {
  const list1 = JSON.parse(localStorage.getItem("todos")) || [];
  tacheList.innerHTML = "";
  displayUsingData(list1, tacheList);
}

const displayUsingData = (data, container) => {
  data.forEach((x) => {
    const li = document.createElement("li");
    li.innerText = x.name;

    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("name", "completed");
    checkbox.setAttribute("value", x.completed);

    const btnDel = document.createElement("button");
    btnDel.innerText = "🌩️";

    container.appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(btnDel);
    if (x.completed) {
      checkbox.checked = true;
      li.style.textDecoration = "line-through";
    }

    checkbox.addEventListener("click", (e) => {
      handleCheckbox(e, li);
    });

    btnDel.addEventListener("click", () => {
      console.log(x.id); //to be removed
      handleDelete(x.id, data);
      getData();
    });
  });
};

const handleDelete = (id, data) => {
  const filteredData = data.filter((x) => {
    if (x.id !== id) {
      return x;
    }
  });
  localStorage.setItem("todos", JSON.stringify(filteredData));
  console.log(filteredData);
};

const handleCheckbox = (event, task) => {
  if (event.target.checked) {
    event.value = true;
    task.style.textDecoration = "line-through";
  } else {
    task.style.textDecoration = "";
  }
};

// Execution du code

const addTaskInput = document.getElementById("add-task-input");
const addTaskBtn = document.getElementById("add-task-button");
let listTask = document.querySelector(".task-list");
let tacheList = listTask.appendChild(document.createElement("ul"));

mock_fetch(Math.random() * 2000 + 2000);

addTaskBtn.addEventListener("click", () => {
  const newTaskName = addTaskInput.value.trim();

  if (!newTaskName) {
    alert("new task is empty, not added");
    return;
  }

  storeData([{ id: nextId, name: newTaskName, completed: false }]);
  getData();
});
