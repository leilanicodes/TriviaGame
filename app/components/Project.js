import React from 'react';

export const Project = (props) => {
  const { title, deadline, priority, completed, description } = props.project;

  return (
    <div>
      <h1>{title}</h1>
      <h2>{deadline} </h2>
      <h2>{priority}</h2>
      <h3>{completed}</h3>
      <p>{description}</p>
    </div>
  );
};
