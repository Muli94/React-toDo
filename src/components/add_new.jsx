import React, { Component } from 'react'

export default class AddNew extends Component{
    constructor(props){
        super(props)
        this.state={
            value: 'Add new task'
        }
    }
    handleInputChange = (e) =>{
        this.setState({
            value: e.target.value
        })
    }
    handleFormSubmit = (e) =>{
        e.preventDefault()
        this.props.onFormSubmit(this.state.value)
    }
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                <label>
                    Add new task:
                    <input 
                        type="text" 
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    />
                </label>
                <button>Send</button>
            </form>
        )
    }
}
