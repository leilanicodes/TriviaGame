import React from 'react';
import { fetchSingleRobot } from '../redux/singleRobot';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

class singleRobot extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.robotId;
    this.props.getSingleRobot(id);
  }
  render() {
    let { name, imageUrl, fuelType, fuelLevel } = this.props.robot;
    let projects = this.props.robot.projects;
    console.log(projects);
    return (
      <div>
        <h2>{name}</h2>
        <img src={imageUrl} />
        <h3>{fuelType}</h3>
        <h3>{fuelLevel}</h3>
        <h3>Projects assigned to {name}</h3>
        <div>
          {projects && projects.length
            ? projects.map((project) => (
                <div key={project.id}>
                  <NavLink to={`/projects/${project.id}`}>
                    {project.title}
                  </NavLink>
                </div>
              ))
            : 'There are no projects currently assigned to this robot.'}
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
});

export default withRouter(connect(mapState, mapDispatch)(singleRobot));
