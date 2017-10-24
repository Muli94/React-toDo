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
      <li className="single__task">
        <p className="single__task--text">
          {this.props.todo}
        </p>
        <div 
          onClick={this.handleDoneButton} 
          className="single__task-button_done"
        >
          Done
        </div>
        <div 
          onClick={this.handleDeleteButton} 
          className="sindle__task-button_delete"
        >
          Delete
        </div>
      </li>
    );
  }
};


export default OneTask;
