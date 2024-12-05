// Definitions 
const MOCKED_DATA = [
  //Explicit
  { id: 1, name: "ménage", completed: false },
  { id: 2, name: "devoirs", completed: false },
  { id: 3, name: "courses", completed: false },
  { id: 4, name: "douche", completed: false },
];

let nextId = 0;

const getDataAndDisplay = (data, container) => {
    data.forEach(x => {
        const li = document.createElement('li')
        li.innerText = x.name;
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('name', 'completed')
        checkbox.setAttribute('value', x.completed)
        const btnDel = document.createElement('button')
        btnDel.innerText = '🌩️';
        container.append(li)
        li.append(checkbox)
        li.append(btnDel)
        if (x.completed) {
            checkbox.checked = true;
            li.style.textDecoration = 'line-through';
        }
        checkbox.addEventListener('click', (e) => {
            handleCheckbox(e, li)

        })

        btnDel.addEventListener('click', () => {
          handleDelete(x.id, data)
          getData()
        })
    })
}

const handleDelete = (id, data) => {
    const filteredData = data.filter(x => {
        if (x.id !== id) {
            return x;
        }
      localStorage.set('todos',JSON.stringify(filteredData))
    })
    console.log(filteredData);

}
const handleCheckbox = (event, task) => {
    if (event.target.checked) {
        event.value = true
        task.style.textDecoration = 'line-through';

    } else {
        task.style.textDecoration = '';
    }

}

async function mock_fetch(ms) {
  // va chercher les données distantes
  await new Promise((resolve) => setTimeout(resolve, ms));
  // appelle la fonction qui stocke les données
  storeData(MOCKED_DATA);
  getData()
  return MOCKED_DATA;
}

function storeData(data) {
  // récupère et combine les données avant de les remettre dans le local storage
  let storedData = JSON.parse(localStorage.getItem("todos")) || [];
  storedData.push(...data);
  nextId = storedData.length + 1;
  localStorage.setItem("todos", JSON.stringify(storedData));
}

function getData() {
  const list1 = JSON.parse(localStorage.getItem("todos")) || [];
  tacheList.innerHTML = "";
  getDataAndDisplay(list1, tacheList)
  });
}

// Execution du code
mock_fetch(Math.random() * 2000 + 2000);
const ul = document.querySelector("#containerTodo")

const addTaskInput = document.getElementById("add-task-input");
const addTaskBtn = document.getElementById("add-task-button");


let listTask = document.querySelector(".task-list");
console.log(listTask);

let tacheList = listTask.appendChild(document.createElement("ul"));
console.log("tacheList", tacheList);

addTaskBtn.addEventListener("click", () => {
  console.log("click");
  const newTaskName = addTaskInput.value.trim();

  if (!newTaskName) {
    alert("new task is empty, not added");
    return;
  }

  storeData([{ id: nextId, name: newTaskName, completed: false }]);
  console.log(nextId);
});