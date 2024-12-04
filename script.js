let listTask = document.querySelector(".task-list");
console.log(listTask);

let tacheList = listTask.appendChild(document.createElement("ul"));
console.log("tacheList", tacheList);
function displayTask() {
  const list1 = JSON.parse(localStorage.getItem("todos")) || [];
  tacheList.innerHTML = "";
  list1.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.name;

    tacheList.appendChild(li);
  });
}
