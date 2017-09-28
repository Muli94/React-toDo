import React, { Component } from 'react';
import OneTask from './one_task';

export default class TaskList extends Component{
    constructor(){
        
        this.state={
            tasks: [],
        }
    }
    renderTask(){
        this.state.tasks.map(elem=>{
            return <li>elem</li>
        })
    }
    render(){
        return(
            <ul>
                {this.renderTask}
            </ul>
        )
    }
}