import React from 'react';
import { fetchSingleRobot } from '../redux/singleRobot';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class singleRobot extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.robotId;
    this.props.getSingleRobot(id);
  }
  render() {
    let { name, imageUrl, fuelType, fuelLevel } = this.props.robot;

    return (
      <div>
        <h2>{name}</h2>
        <img src={imageUrl} />
        <h3>{fuelType}</h3>
        <h3>{fuelLevel}</h3>
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
