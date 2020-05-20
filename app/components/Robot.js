import React from 'react';

export const Robot = (props) => {
  const { name, imageUrl, fuelType, fuelLevel } = props.robot;
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} />
      <h2>{fuelType}</h2>
      <h2>{fuelLevel}</h2>
    </div>
  );
};
