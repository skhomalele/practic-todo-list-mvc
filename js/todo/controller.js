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

// model.addTasks('Пить пива')
// model.addTasks('Пить водку')
// model.addTasks('Пить ваду')
// console.log(model)


// view.renderTask(model.tasks[1])