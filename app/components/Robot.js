import React from 'react';
import { NavLink } from 'react-router-dom';

export const Robot = (props) => {
  const { id, name, imageUrl, fuelType, fuelLevel } = props.robot;

  return (
    <div>
      <NavLink to={`/robots/${id}`}>
        <h2>{name}</h2>
      </NavLink>
      <img src={imageUrl} />
      <h3>{fuelType}</h3>
      <h3>{fuelLevel}</h3>
    </div>
  );
};
