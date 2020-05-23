import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteProjectThunk } from '../redux/projects';

const Project = (props) => {
  const {
    id,
    title,
    deadline,
    priority,
    completed,
    description,
  } = props.project;

  return (
    <div>
      <NavLink to={`/projects/${id}`}>
        <h1>{title}</h1>{' '}
      </NavLink>
      <button type="button" id="delete" onClick={() => props.deleteProject(id)}>
        X
      </button>
      <h2>Deadline: {deadline} </h2>
      <h2>Priority: {priority}</h2>
      <h3>Status: {completed ? 'complete' : 'In progress'}</h3>
      <p>Description: {description}</p>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  deleteProject: (projectId) => dispatch(deleteProjectThunk(projectId)),
});

export default connect(null, mapDispatch)(Project);
