const oldTodo = [
    { id: 1, name: 'Buy groceries', completed: true },
    { id: 10, name: 'Buy Nutella', completed: false },
    { id: 100, name: 'Buy balthy', completed: false }]


const ul = document.querySelector("#containerTodo")
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

        btnDel.addEventListener('click', () => { handleDelete(x.id, data) })
    })
}

const handleDelete = (id, data) => {
    const filteredData = data.filter(x => {
        if (x.id !== id) {
            return x;
        }
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
getDataAndDisplay(oldTodo, ul)