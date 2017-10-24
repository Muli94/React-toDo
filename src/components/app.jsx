import React, { Component } from 'react'

import AddNew from './add_new'
import TaskList from './task_list'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            tasks: {},
            id: 0
        }
    }
    componentDidMount(){
        const todos = JSON.parse(localStorage.getItem('Todos'))
        this.setState({
            tasks: todos,
            id: [Object.keys(todos)[Object.keys(todos).length]]
        })
    }
    onFormSubmit = (todo) =>{
        const tasksCopy = { ...this.state.tasks }
        tasksCopy[this.state.id] = {...todo}
        localStorage.setItem('Todos', JSON.stringify(this.state.tasks))
        this.setState({
            tasks: tasksCopy,
            id: this.state.id + 1
        })
    }
    onDeleteTodo = (id) => {
        const copyObj = { ...this.state.tasks }
        delete copyObj[id]
        localStorage.setItem('Todos', JSON.stringify(copyObj))
        this.setState({
            tasks: copyObj
        })
    }
    render(){
        return(
            <div>
                <AddNew onFormSubmit={this.onFormSubmit} />
                <TaskList tasks={this.state.tasks} onDeleteTodo = {this.onDeleteTodo} />
            </div>
        )
    }
}