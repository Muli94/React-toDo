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

  };
  handleDeleteButton = () => {
    
  };
  render(){
    return (
      <li>
        <p>{props.value}</p>
        <div onClick={this.handleDoneButton}>Done</div>
        <div onClick={this.handleDeleteButton}>Delete</div>
      </li>
    );
  }
};

OneTask.propTypes = {
  value: PropTypes.string.isRequired,
};

export default OneTask;
