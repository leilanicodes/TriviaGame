import React from 'react';
import { fetchSingleProject } from '../redux/singleProject';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export const Project = (props) => {
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
      <h1 onClick={() => props.getSingleProject(id)}>{title}</h1>
      <h2>{deadline} </h2>
      <h2>{priority}</h2>
      <h3>{completed}</h3>
      <p>{description}</p>
    </div>
  );
};

const mapState = (reduxState) => ({
  project: reduxState.project,
});

const mapDispatch = (dispatch) => ({
  getSingleProject: (id) => dispatch(fetchSingleProject(id)),
});

export default withRouter(connect(mapState, mapDispatch)(Project));
