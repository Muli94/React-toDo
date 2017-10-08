import React from 'react';
import PropTypes from 'prop-types';

const OneTask = props => (
  <li>
    <div />
    <p>{props.value}</p>
    <div>Done</div>
    <div>Delete</div>
  </li>
);

OneTask.propTypes = {
  value: PropTypes.string.isRequired,
};

export default OneTask;
