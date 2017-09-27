import React, { Component } from 'react'

export default class AddNew extends Component{
    constructor(){
        this.state={
            value: 'Add new task'
        }
    }
    handleInputChange = (e) =>{
        this.setState({
            value: e.target.value
        })
    }
    handleFormSubmit = () =>{
        
    }
    render(){
        return(
            <form onSubmit={handleFormSubmit}>
                <label>
                    Add new task:
                    <input 
                    type="text" 
                    value={this.state.value}
                    onChange={handleInputChange}
                    />
                </label>
                <button>Send</button>
            </form>
        )
    }
}
