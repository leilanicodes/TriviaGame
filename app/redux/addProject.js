import axios from 'axios';

const ADD_PROJECT = 'ADD_PROJECT';

export const addProject = (newProject) => {
  return {
    type: ADD_PROJECT,
    newProject,
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
      console.log('Error adding a project', err);
    }
  };
};

export default function addProjectReducer(newProject = {}, action) {
  switch (action.type) {
    case ADD_PROJECT: {
      return action.newProject;
    }
    default:
      return newProject;
  }
}
