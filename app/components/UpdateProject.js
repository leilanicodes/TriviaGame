import React from 'react';
import { updateProjectThunk } from '../redux/singleProject';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class UpdateProject extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    const updatedProject = {
      title: event.target.title.value,
      deadline: event.target.deadline.value,
      priority: event.target.priority.value,
      completed: event.target.completed.value,
      description: event.target.description.value,
      id: this.props.match.params.projectId,
    };
    this.props.updateProject(updatedProject);
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
          <option value="true">Complete</option>{' '}
          <option value="false">In progress</option>
        </select>
        <label htmlFor="description">Description: </label>
        <textarea name="description" />
        <button type="submit" className="button">
          Save Changes
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => ({
  updateProject: (updatedProject) =>
    dispatch(updateProjectThunk(updatedProject)),
});

export default withRouter(connect(null, mapDispatch)(UpdateProject));
