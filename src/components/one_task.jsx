import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OneTask extends Component{
  constructor(props){
    super(props)
    this.state={
      isDone: false,
    }
  }
  handleDoneButton = () => {
    this.setState({
      isDone: true
    })
  };
  handleDeleteButton = () => {
    this.props.onDeleteTodo(this.props.id)
  };
  render(){
    return (
      <li>
        <p>{this.props.todo}</p>
        <div onClick={this.handleDoneButton}>Done</div>
        <div onClick={this.handleDeleteButton}>Delete</div>
      </li>
    );
  }
};


export default OneTask;
