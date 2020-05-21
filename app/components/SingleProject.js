import React from 'react';
import { fetchSingleProject } from '../redux/singleProject';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class singleProject extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.projectId;
    this.props.getSingleProject(id);
  }
  render() {
    let {
      title,
      deadline,
      priority,
      completed,
      description,
    } = this.props.project;
    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h2>{deadline} </h2>
          <h2>{priority}</h2>
          <h3>{completed}</h3>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => ({
  project: reduxState.project,
});

const mapDispatch = (dispatch) => ({
  getSingleProject: (projectId) => dispatch(fetchSingleProject(projectId)),
});

export default withRouter(connect(mapState, mapDispatch)(singleProject));
