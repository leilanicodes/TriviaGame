import React from 'react';
import { connect } from 'react-redux';
import { Project } from './Project';
import { fetchProjects } from '../redux/projects';
import { withRouter } from 'react-router-dom';
import AddProject from './AddProject';

export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const projects = this.props.projects;
    return (
      <div>
        <h1>All Projects</h1>
        <div>
          <AddProject />
        </div>
        {projects && projects.length
          ? projects.map((project) => (
              <Project key={project.id} project={project} />
            ))
          : 'There are no projects registered in the database.'}
      </div>
    );
  }
}

const mapState = (reduxState) => {
  return {
    projects: reduxState.projects,
  };
};

const mapDispatch = (dispatch) => ({
  getProjects: () => dispatch(fetchProjects()),
});

export default withRouter(connect(mapState, mapDispatch)(AllProjects));
