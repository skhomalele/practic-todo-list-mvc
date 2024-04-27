import Model from "./model.js";
import View from "./view.js";


const model = new Model()
const view = new View(model.tasks)

view.elements.form.addEventListener('submit', function(event) {

    const data = view.elements.input.value

    event.preventDefault

    view.renderTask(model.addTasks(data))
    view.clearInput()


})


view.elements.tasksList.addEventListener('click', function(event) {

    if (event.target.getAttribute('type') === 'checkbox') {
        const id = event.target.closest('.todo-item').dataset.id
        const task = model.findTask(id)
        model.changeStatus(task)
        view.changeStatus(task)
    }

    if (event.target.hasAttribute('data-delete')) {
        const id = event.target.closest('.todo-item').dataset.id
        const task = model.findTask(id)
        model.removeTask(task)
        view.removeTask(task)
    }
})

// model.addTasks('Пить пива')
// model.addTasks('Пить водку')
// model.addTasks('Пить ваду')
// console.log(model)


// view.renderTask(model.tasks[1])