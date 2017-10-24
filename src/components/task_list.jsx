import PropTypes from 'prop-types';
import React from 'react';
import OneTask from './one_task';

const TaskList = props => {
  return(
    <ul className="tasks__list">
      { Object.keys(props.tasks).map(elem=>{
        return(
          <OneTask 
            todo={props.tasks[elem].value} 
            key={elem} 
            id={elem} 
            onDeleteTodo={props.onDeleteTodo}
          />
        ) 
      })}
    </ul>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
};

export default TaskList;
