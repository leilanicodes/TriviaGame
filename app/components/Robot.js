import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteRobotThunk } from '../redux/robots';

const Robot = (props) => {
  const { id, name, imageUrl, fuelType, fuelLevel } = props.robot;

  return (
    <div>
      <NavLink to={`/robots/${id}`}>
        <h2>Name: {name}</h2>
      </NavLink>
      <button type="button" id="delete" onClick={() => props.deleteRobot(id)}>
        X
      </button>
      <img src={imageUrl} />
      <h3>Fuel Type: {fuelType}</h3>
      <h3>Fuel Level: {fuelLevel}</h3>
    </div>
  );
};

const mapDispatch = (dispatch) => ({
  deleteRobot: (robotId) => dispatch(deleteRobotThunk(robotId)),
});

export default withRouter(connect(null, mapDispatch)(Robot));
