import PropTypes from 'prop-types';
import React from 'react';
import OneTask from './one_task';

const TaskList = props => (
  <ul className="tasks__list">
    { Object.keys(props.tasks).map(elem => (
      <OneTask
        todo={props.tasks[elem].value}
        key={elem}
        id={elem}
        onDeleteTodo={props.onDeleteTodo}
        onDoneTodo={props.onDoneTodo}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default TaskList;
