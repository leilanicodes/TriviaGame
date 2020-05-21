import React from 'react';
import { NavLink } from 'react-router-dom';

export const Project = (props) => {
  const {
    id,
    title,
    deadline,
    priority,
    completed,
    description,
  } = props.project;

  return (
    <div>
      <NavLink to={`/projects/${id}`}>
        <h1>{title}</h1>{' '}
      </NavLink>
      <h2>{deadline} </h2>
      <h2>{priority}</h2>
      <h3>{completed}</h3>
      <p>{description}</p>
    </div>
  );
};
