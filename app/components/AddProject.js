import React from 'react';
import { fetchAddedProject } from '../redux/addProject';
import { connect } from 'react-redux';

class AddProject extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.reloadPage = this.reloadPage.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const newProject = {
      title: event.target.title.value,
      deadline: event.target.deadline.value,
      priority: event.target.priority.value,
      completed: event.target.completed.value,
      description: event.target.description.value,
    };

    this.props.addProject({
      newProject,
    });
  }
  reloadPage() {
    window.location.reload(false);
  }

  render() {
    return (
      <form id="project-form" onSubmit={this.handleSubmit}>
        <label htmlFor="title">Project Title: </label>
        <input name="title" type="text" />
        <label htmlFor="deadline">Deadline: </label>
        <input name="deadline" type="datetime-local" />
        <label htmlFor="priority">Priority: </label>
        <input name="priority" type="number" min="1" max="10" />
        <label htmlFor="completed">Completed: </label>
        <select name="completed">
          <option value="true">Completed</option>{' '}
          <option value="false">In progress</option>
        </select>
        <label htmlFor="description">Description: </label>
        <textarea name="description" />
        <button type="submit" onClick={this.reloadPage}>
          Add Project
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  addProject: (newProject) => dispatch(fetchAddedProject(newProject)),
});

// const mapState = (reduxState) => ({
//   newRobot: reduxState.newRobot,
// });
export default connect(null, mapDispatch)(AddProject);
