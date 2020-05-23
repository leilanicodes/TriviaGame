import axios from 'axios';

const SET_SINGLEPROJECT = 'SET_SINGLEPROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';

const setSingleProject = (project) => {
  return {
    type: SET_SINGLEPROJECT,
    project,
  };
};

const updateProject = (updatedProject) => {
  return {
    type: UPDATE_PROJECT,
    updatedProject,
  };
};

export default function singleProjectReducer(project = {}, action) {
  switch (action.type) {
    case SET_SINGLEPROJECT: {
      return action.project;
    }
    case UPDATE_PROJECT: {
      return action.updatedProject;
    }
    default:
      return project;
  }
}

export const fetchSingleProject = (projectId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/projects/${projectId}`);
      dispatch(setSingleProject(data));
    } catch (err) {
      console.log('Error fetching single project', err);
    }
  };
};

export const updateProjectThunk = (updatedProject) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(
        `/api/projects/${updatedProject.id}`,
        updatedProject
      );

      dispatch(updateProject(data));
    } catch (err) {
      console.log('Error updating project', err);
    }
  };
};
