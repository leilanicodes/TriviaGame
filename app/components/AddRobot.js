import React from 'react';
import { fetchAddedRobot } from '../redux/robots';
import { connect } from 'react-redux';

class AddRobot extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const newRobot = {
      name: event.target.name.value,
      imageUrl: event.target.imageUrl.value,
      fuelType: event.target.fuelType.value,
      fuelLevel: event.target.fuelLevel.value,
    };
    this.props.addRobot({ newRobot });
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
          Add Robot
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addRobot: (newRobot) => dispatch(fetchAddedRobot(newRobot)),
});

export default connect(null, mapDispatch)(AddRobot);
