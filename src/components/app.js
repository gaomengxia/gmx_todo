import React from 'react'
import _ from 'lodash'
import TodoList from 'components/todo-list'
import TodoCreate from 'components/todo-create'


const todos = [
    {
        task: 'Learning React',
        isCompleted: true
    },
    {
        task: 'Learning Jsx',
        isCompleted: false
    },
    {
        task: 'React in action',
        isCompleted: false
    }
]

class App extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            todos: todos
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h1>React todos App</h1>
                    <TodoCreate todos={this.state.todos}
                        validateTask={this.validateTask.bind(this)}
                        createTask={this.createTask.bind(this)}/>
                    
                    <TodoList todos={this.state.todos}
                              validateTask={this.validateTask.bind(this)}
                              deleteTask={this.deleteTask.bind(this)}
                              toggleTask={this.toggleTask.bind(this)}
                              saveTask={this.saveTask.bind(this)}/>
                </div>
                <div className="col-3"></div>
            </div>
        )
    }

    createTask(task){
        this.state.todos.push({
            task: task,
            isCompleted: false
        })
        this.setState({todos: this.state.todos})
    }

    validateTask(task){
        if (!task){
            return 'Please enter a task~'
        }else if (_.find(this.state.todos, todo => todo.task === task)){
            return 'Task already exsits!'
        }else{
            return ''
        }
    }
    

    deleteTask(currentTask){
        _.remove(this.state.todos, todo => todo.task === currentTask)
        this.setState({todos: this.state.todos})
    }

    saveTask(oldTask, newTask){
        const foundTask = _.find(this.state.todos, todo => todo.task === oldTask)
        foundTask.task = newTask
        this.setState({todos: this.state.todos})
    }

    toggleTask(currentTask){
        const foundTask = _.find(this.state.todos, todo => todo.task === currentTask)
        foundTask.isCompleted = !foundTask.isCompleted
        this.setState({todos: this.state.todos})
    }
}

export default App
