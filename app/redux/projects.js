import axios from 'axios';

const SET_PROJECTS = 'SET_PROJECTS';
const ADD_PROJECT = 'ADD_PROJECT';
const DELETE_PROJECT = 'DELETE_PROJECT';
const SET_TRIVIA = 'SET_TRIVIA';

const setProjects = (projects) => {
  return {
    type: SET_PROJECTS,
    projects,
  };
};

const setTrivia = (results) => {
  return {
    type: SET_TRIVIA,
    results,
  };
};

const addProject = (newProject) => {
  return {
    type: ADD_PROJECT,
    newProject,
  };
};

const deleteProject = (deletedProjectId) => {
  return {
    type: DELETE_PROJECT,
    deletedProjectId,
  };
};

export default function projectsReducer(projects = [], action) {
  switch (action.type) {
    case SET_PROJECTS: {
      return action.projects;
    }
    case SET_TRIVIA: {
      return action.results;
    }
    case ADD_PROJECT: {
      return [...projects, action.newProject];
    }
    case DELETE_PROJECT: {
      return projects.filter(
        (project) => project.id !== action.deletedProjectId
      );
    }
    default:
      return projects;
  }
}

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

export const fetchAddedProject = (newProject) => {
  return async (dispatch) => {
    try {
      const { data: addedProject } = await axios.post(
        '/api/projects/',
        newProject
      );
      dispatch(addProject(addedProject));
    } catch (err) {
      console.log('Error adding project', err);
    }
  };
};

export const fetchTrivia = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('https://opentdb.com/api.php?amount=50');
      console.log('data~~~~~~~', data);
      dispatch(setTrivia(data));
    } catch (err) {
      console.log('Error fetching trivia', err);
    }
  };
};

export const fetchAddedTrivia = (newProject) => {
  return async (dispatch) => {
    try {
      const { data: addedProject } = await axios.post(
        '/api/projects/',
        newProject
      );
      dispatch(addProject(addedProject));
    } catch (err) {
      console.log('Error adding project', err);
    }
  };
};

export const deleteProjectThunk = (projectId) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/projects/${projectId}`);
      dispatch(deleteProject(projectId));
    } catch (err) {
      console.log('Error deleting project', err);
    }
  };
};
