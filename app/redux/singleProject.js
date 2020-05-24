import axios from 'axios';

const SET_SINGLEPROJECT = 'SET_SINGLEPROJECT';
const UPDATE_PROJECT = 'UPDATE_PROJECT';
const COMPLETE_PROJECT = 'COMPLETE_PROJECT';

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

const completeProject = (id, completed, project) => {
  return {
    type: COMPLETE_PROJECT,
    id,
    completed,
    project,
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
    case COMPLETE_PROJECT: {
      let updatedProject = action.project;
      updatedProject.completed = !updatedProject.completed;
      return { ...updatedProject };
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

export const completeProjectThunk = (projectId, completed, project) => {
  return async (dispatch) => {
    try {
      await axios.patch(`/api/projects/${projectId}`, {
        updatedFields: { completed },
      });
      dispatch(completeProject(projectId, completed, project));
    } catch (err) {
      console.log('Error completing project', err);
    }
  };
};
