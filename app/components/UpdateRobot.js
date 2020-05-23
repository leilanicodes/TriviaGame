import React from 'react';
import { updateRobotThunk } from '../redux/singleRobot';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UpdateRobot extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const updatedRobot = {
      name: event.target.name.value,
      imageUrl: event.target.imageUrl.value,
      fuelType: event.target.fuelType.value,
      fuelLevel: event.target.fuelLevel.value,
      id: this.props.match.params.robotId,
    };
    this.props.updateRobot(updatedRobot);
  }
  render() {
    return (
      <form id="robot-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Robot Name: </label>
        <input name="name" type="text" />
        <label htmlFor="imageUrl">Image Url: </label>
        <input name="imageUrl" type="url" />
        <label htmlFor="fuelType">Fuel Type: </label>
        <select name="fuelType">
          <option defaultValue="selectFuelType">Select fuel type...</option>
          <option value="electric">electric</option>
          <option value="diesel">diesel</option>
          <option value="gas">gas</option>
        </select>
        <label htmlFor="fuelLevel">Fuel Level: </label>
        <input name="fuelLevel" type="number" min="0" max="100" />
        <button type="submit" className="button">
          Save Changes
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  updateRobot: (updatedRobot) => dispatch(updateRobotThunk(updatedRobot)),
});

export default withRouter(connect(null, mapDispatch)(UpdateRobot));
