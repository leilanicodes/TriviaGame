import React from 'react';
import { connect } from 'react-redux';
import { Project } from './Project';
import { fetchProjects } from '../redux/projects';

// Notice that we're exporting the AllProjects component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllProjects extends React.Component {
  componentDidMount() {
    this.props.getProjects();
  }
  render() {
    const projects = this.props.projects;
    return (
      <div>
        {projects && projects.length
          ? projects.map((project) => (
              <Project key={project.id} project={project} />
            ))
          : 'No Projects'}
      </div>
    );
  }
}

const mapState = (reduxState) => ({
  projects: reduxState.projects,
});

const mapDispatch = (dispatch) => ({
  getProjects: () => dispatch(fetchProjects()),
});

export default connect(mapState, mapDispatch)(AllProjects);
