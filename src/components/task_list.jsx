import React, { Component } from 'react';
import OneTask from './one_task';

export default class TaskList extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <ul>
                {this.props.tasks.map((elem,id)=>{
                    return(
                        <OneTask 
                            value={elem}
                            key={elem+id}
                        />
                    )
                })}
            </ul>
        )
    }
}