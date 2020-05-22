import React from 'react';
import { fetchAddedRobot } from '../redux/addRobot';
import { connect } from 'react-redux';

class AddRobot extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reloadPage = this.reloadPage.bind(false);
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
    this.forceUpdate();
  }
  reloadPage() {
    window.location.reload(false);
  }
  render() {
    console.log('props~~~~~', this.props);
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
        <button type="submit" onClick={this.reloadPage}>
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
