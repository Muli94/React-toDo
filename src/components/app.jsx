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
        const newId = this.state.id + 1
        tasksCopy[newId] = {...todo}
        this.setState({
            tasks: tasksCopy,
            id: newId
        })
        localStorage.setItem('Todos', JSON.stringify(tasksCopy))
    }
    onDeleteTodo = (id) => {
        const copyObj = { ...this.state.tasks }
        delete copyObj[id]
        localStorage.setItem('Todos', JSON.stringify(copyObj))
        this.setState({
            tasks: copyObj
        })
    }
    onDoneTodo = (isDone, id) =>{
        const copyObj = { ...this.state.tasks }
        copyObj[id].isDone = isDone
        localStorage.setItem('Todos', JSON.stringify(copyObj))
        console.log(copyObj[id])
        this.setState({
            tasks: copyObj
        })
    }
    render(){
        return(
            <div className="container">
                <AddNew onFormSubmit={this.onFormSubmit} />
                <TaskList 
                    tasks={this.state.tasks} 
                    onDeleteTodo = {this.onDeleteTodo}
                    onDoneTodo = {this.onDoneTodo}
                />
            </div>
        )
    }
}