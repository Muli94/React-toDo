import PropTypes from 'prop-types';
import React from 'react';
import OneTask from './one_task';

const TaskList = props => (
  <ul>
    {props.tasks.map(elem => (
      <OneTask
        value={elem}
        key={elem}
      />
    ))}
  </ul>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TaskList;
