import React, { Component } from 'react';

export default class OneTask extends Component{
    render(){
        return(
            <li>
                <div></div>
                <p>{this.props.value}</p>
                <div>Done</div>
                <div>Delete</div>
            </li>
        )
    }
}