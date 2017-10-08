import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class AddNew extends Component{
    constructor(props){
        super(props)
        this.state={
            value: ''
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
