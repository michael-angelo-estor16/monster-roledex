import React from 'react';
import './style.css';
import { Card } from '../card';

export const CardList = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.monsters.map((monster, index) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
