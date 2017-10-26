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
            id: Object.keys(todos).length || 0
        })
    }
    onFormSubmit = (todo) =>{
        const tasksCopy = { ...this.state.tasks }
        const newId = parseInt(this.state.id + 1)
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
    handleDeleteAllButton = () =>{
        this.setState({
            tasks: {}
        })
        localStorage.setItem('Todos', JSON.stringify({}))
    }
    handleDeleteAllTasksButton = () =>{
        const copyObj = { ...this.state.tasks }
        for(var key in copyObj){
            if(copyObj[key].isDone === true){
                delete copyObj[key]
            }
        }
        this.setState({
            tasks: copyObj
        })
        localStorage.setItem('Todos', JSON.stringify(copyObj))
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
                <div 
                    className="button__delete-all"
                    onClick={this.handleDeleteAllButton}
                >
                    Delete all tasks
                </div>
                <div 
                    className="button__delete-all-done"
                    onClick={this.handleDeleteAllTasksButton}
                >
                    Delete all done tasks
                </div>
            </div>
        )
    }
}