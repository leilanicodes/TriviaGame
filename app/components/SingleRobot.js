import React from 'react';
import { fetchSingleRobot, unassignProjectThunk } from '../redux/singleRobot';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';
import UpdateRobot from './UpdateRobot';

class SingleRobot extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.robotId;
    console.log('all robots mounted');

    this.props.getSingleRobot(id);
  }
  render() {
    let { name, imageUrl, fuelType, fuelLevel } = this.props.robot;
    let projects = this.props.robot.projects;
    let robotId = this.props.robot.id;
    return (
      <div>
        <h2>Name: {name}</h2>
        <img src={imageUrl} />
        <h3>Fuel Type: {fuelType}</h3>
        <h3>Fuel Level: {fuelLevel}</h3>
        <h3>Projects assigned to {name}:</h3>
        <div>
          {projects && projects.length
            ? projects.map((project) => (
                <div key={project.id}>
                  <NavLink to={`/projects/${project.id}`}>
                    {project.title}
                  </NavLink>
                  <button
                    type="button"
                    className="button"
                    onClick={() =>
                      this.props.unassignProject(robotId, project.id)
                    }
                  >
                    Unassign
                  </button>
                </div>
              ))
            : 'There are no projects currently assigned to this robot.'}
        </div>
        <div>
          {' '}
          Edit Robot:
          <UpdateRobot />
        </div>
      </div>
    );
  }
}

const mapState = (reduxState) => ({
  robot: reduxState.robot,
});

const mapDispatch = (dispatch) => ({
  getSingleRobot: (robotId) => dispatch(fetchSingleRobot(robotId)),
  unassignProject: (robotId, projectId) => {
    dispatch(unassignProjectThunk(robotId, projectId));
  },
});

export default withRouter(connect(mapState, mapDispatch)(SingleRobot));
