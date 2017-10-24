import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddNew extends Component{
    constructor(props){
        super(props)
        this.state={
            value: '',
            isDone: false,
            todo: {}
        }
    }
    handleInputChange = (e) =>{
        this.setState({
            value: e.target.value,
            todo: { value: e.target.value, isDone: this.state.isDone }
        })
    }
    handleFormSubmit = (e) =>{
        e.preventDefault()
        console.log(this.state.todo)
        this.props.onFormSubmit(this.state.todo)
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
                        placeholder="Add new task!"
                    />
                </label>
                <button>Send</button>
            </form>
        )
    }
}

AddNew.propTypes={
    onFormSubmit: PropTypes.func.isRequired
}
