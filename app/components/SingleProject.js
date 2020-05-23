import React from 'react';
import { fetchSingleProject } from '../redux/singleProject';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import UpdateProject from './UpdateProject';

class SingleProject extends React.Component {
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
    let robots = this.props.project.robots;

    return (
      <div>
        <div>
          <h1>{title}</h1>
          <h2>Deadline: {deadline} </h2>
          <h2>Priority: {priority}</h2>
          <h3>status: {completed ? 'Complete' : 'In progress'}</h3>
          <h3>Description: {description}</h3>
          <h3>Robots assigned to this project:</h3>
          <div>
            {robots && robots.length
              ? robots.map((robot) => (
                  <div key={robot.id}>
                    <NavLink to={`/robots/${robot.id}`}>{robot.name}</NavLink>
                    <button type="button" className="button">
                      Unassign
                    </button>
                  </div>
                ))
              : 'There are no robots currently assigned to this project.'}
          </div>
        </div>
        <div>
          Edit Project:
          <UpdateProject />
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

export default withRouter(connect(mapState, mapDispatch)(SingleProject));
