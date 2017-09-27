import React, { Component } from 'react'

import AddNew from './components/add_new'
import TaskList from './components/task_list'

export default class App extends Component{
    render(){
        return(
            <div>
                <AddNew />
                <TaskList />
            </div>
        )
    }
}