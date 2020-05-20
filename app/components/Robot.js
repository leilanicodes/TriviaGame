import React from 'react';

export const Robot = (props) => {
  const { name, imageUrl } = props.robot;
  return (
    <div>
      <h1>{name}</h1>
      <img src={imageUrl} />
    </div>
  );
};
