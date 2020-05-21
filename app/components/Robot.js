import React from 'react';
import { fetchSingleRobot } from '../redux/singleRobot';
import { connect } from 'react-redux';
import { withRouter, NavLink } from 'react-router-dom';

export const Robot = (props) => {
  const { id, name, imageUrl, fuelType, fuelLevel } = props.robot;

  console.log('~~~~~~~~~~~~props', props);

  return (
    <div>
      {' '}
      <NavLink to={`/robot/${id}`}>Navigate</NavLink>
      <h2 onClick={() => props.getSingleRobot(id)}>{name}</h2>
      <img src={imageUrl} />
      <h3>{fuelType}</h3>
      <h3>{fuelLevel}</h3>
    </div>
  );
};

const mapState = (reduxState) => ({
  robot: reduxState.robot,
});

const mapDispatch = (dispatch) => ({
  getSingleRobot: (id) => dispatch(fetchSingleRobot(id)),
});

export default withRouter(connect(mapState, mapDispatch)(Robot));
