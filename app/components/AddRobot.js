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
    this.props.addRobot({
      newRobot,
    });
  }

  render() {
    return (
      <form id="robot-form" onSubmit={this.handleSubmit}>
        <label htmlFor="name">Robot Name: </label>
        <input name="name" type="text" />
        <label htmlFor="imageUrl">Image Url: </label>
        <input name="imageUrl" type="text" />
        <label htmlFor="fuelType">Fuel Type: </label>
        <input name="fuelType" type="text" />
        <label htmlFor="fuelLevel">Fuel Level: </label>
        <input name="fuelLevel" type="text" />
        <button type="submit">Add Robot</button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addRobot: (newRobot) => dispatch(fetchAddedRobot(newRobot)),
});

export default connect(null, mapDispatch)(AddRobot);
