const MOCKED_DATA = [
  //Explicit
  { id: 1, name: "ménage", completed: false },
  { id: 2, name: "devoirs", completed: false },
  { id: 3, name: "courses", completed: false },
  { id: 4, name: "douche", completed: false },
];
let nextId = 0;

async function mock_fetch(ms) {
  // va chercher les données distantes
  await new Promise((resolve) => setTimeout(resolve, ms));
  // appelle la fonction qui stocke les données
  storeData(MOCKED_DATA);

  return MOCKED_DATA;
}

function storeData(data) {
  // récupère et combine les données avant de les remettre dans le local storage
  let storedData = JSON.parse(localStorage.getItem("todos")) || [];
  storedData.push(...data);
  nextId = storedData.length + 1;
  localStorage.setItem("todos", JSON.stringify(storedData));
}

// Main
mock_fetch(Math.random() * 2000 + 2000);

const addTaskInput = document.getElementById("add-task-input");
const addTaskBtn = document.getElementById("add-task-button");

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

// localStorage.clear();
