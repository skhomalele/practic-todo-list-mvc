export default class View {
    constructor(tasks) {
        tasks.forEach((task) => {
            this.renderTask(task)
        });
    }

    elements = {
        input: document.querySelector('#newTask'),
        form: document.querySelector('#form'),
        tasksList: document.querySelector('#tasksList'),
    }

    renderTask(taskObject) {

        let completeClass = ''
        let checked = ''

        if(taskObject.status === 'done') {
            completeClass = 'completed'
            checked = 'checked'
        }


        const taskHTML = `
                            <li class="todo-item" data-id="${taskObject.id}">
                                 <label class="todo-item-label">
                                    <input class="checkbox" type="checkbox" ${checked} />
                                    <span class="${completeClass}">${taskObject.text}</span>
                                    <button class="btn btn-secondary btn-sm" data-delete >Удалить</button>
                                 </label>
                            </li>`
                
        this.elements.tasksList.insertAdjacentHTML('beforeend', taskHTML)

    }

    clearInput() {
        this.elements.input.value = ''
    }
    
    changeStatus(taskObject) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`)

        const taskTextElement = taskElement.querySelector('span')
        if (taskObject.status === 'done') {
            taskTextElement.classList.add('completed')
        } else {
            taskTextElement.classList.remove('completed')
        }
    }

    removeTask(taskObject) {
        const taskElement = this.elements.tasksList.querySelector(`[data-id="${taskObject.id}"]`)
        taskElement.remove()
    }


}