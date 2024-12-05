const oldTodo = [
    { id: 1, name: 'Buy groceries', completed: true },
    { id: 10, name: 'Buy Nutella', completed: false },
    { id: 100, name: 'Buy balthy', completed: false }]


const ul = document.querySelector("#containerTodo")
const getDataAndDisplay = (data) => {
    data.forEach(x => {
        const li = document.createElement('li')
        li.innerText = x.name;
        const checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('name', 'completed')
        checkbox.setAttribute('value', x.completed)
        const btnDel = document.createElement('button')
        btnDel.innerText = '🌩️';
        ul.append(li)
        li.append(checkbox)
        li.append(btnDel)
        if (x.completed) {
            checkbox.checked = true;
            li.style.textDecoration = 'line-through';
        }
        checkbox.addEventListener('click', (e) => {
            if (e.target.checked) {
                e.value = true
                li.style.textDecoration = 'line-through';

            } else {
                li.style.textDecoration = '';
            }
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
getDataAndDisplay(oldTodo)