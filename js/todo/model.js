export default class Model {
    constructor () {
        this.tasks = []
        this.loadFromLocalStorage()

    }

    addTasks(text) {
        
        const newTask = {
            status: 'active',
            text: text
        }

        this.tasks.push(newTask)
        this.saveToLocalStorage()

        return newTask
    }

    doneTask(task) {
        task.status = 'done'
        this.saveToLocalStorage()
    }

    removeTask(task) {
        const index = this.tasks.indexOf(task)
        this.tasks.splice(index, 1)
        this.saveToLocalStorage()
    }

    saveToLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }

    loadFromLocalStorage() {
        const data = localStorage.getItem('tasks')
        if (data) {
            this.tasks = JSON.parse(data)
        }
    }
}

