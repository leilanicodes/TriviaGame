import React from 'react';
import { NavLink } from 'react-router-dom';

export const Robot = (props) => {
  const { id, name, imageUrl, fuelType, fuelLevel } = props.robot;

  return (
    <div>
      <NavLink to={`/robots/${id}`}>
        <h2>Name: {name}</h2>
      </NavLink>
      <img src={imageUrl} />
      <h3>Fuel Type: {fuelType}</h3>
      <h3>Fuel Level: {fuelLevel}</h3>
    </div>
  );
};
