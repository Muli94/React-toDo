import React, { Component } from 'react'

import AddNew from './add_new'
import TaskList from './task_list'

export default class App extends Component{
    constructor(props){
        super(props)
        this.state={
            tasks: []
        }
    }
    onFormSubmit = (task) =>{
        let tasksCopy = this.state.tasks.slice()
        tasksCopy = [...tasksCopy, task]
        this.setState({
            tasks: tasksCopy
        })
    }
    render(){
        return(
            <div>
                <AddNew onFormSubmit={this.onFormSubmit} />
                <TaskList tasks={this.state.tasks} />
            </div>
        )
    }
}