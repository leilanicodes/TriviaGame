import axios from 'axios';

const SET_PROJECTS = 'SET_PROJECTS';
const ADD_PROJECT = 'ADD_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';

const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

const addProject = (newProject) => {
  return {
    type: ADD_PROJECT,
    newProject,
  };
};

const deleteProject = (project) => {
  return {
    type: DELETE_PROJECT,
    projectId: project.id,
  };
};

export const fetchProjects = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/projects');
      dispatch(setProjects(data));
    } catch (err) {
      console.log('Error fetching projects', err);
    }
  };
};

export default function projectsReducer(projects = [], action) {
  switch (action.type) {
    case SET_PROJECTS: {
      return action.projects;
    }
    case ADD_PROJECT: {
      return [...projects, action.newProject];
    }
    case DELETE_PROJECT: {
      return [
        ...projects,
        projects.filter((project) => project.id !== action.projectId),
      ];
    }
    default:
      return projects;
  }
}

export const fetchAddedProject = (newProject) => {
  return async (dispatch) => {
    try {
      const { data: addedProject } = await axios.post(
        '/api/projects/',
        newProject
      );
      dispatch(addProject(addedProject));
    } catch (err) {
      console.log('Error adding a project', err);
    }
  };
};

export const deleteProjectThunk = (projectId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      dispatch(deleteProject(projectId));
    } catch (err) {
      console.log('Error deleting a project', err);
    }
  };
};
