import React from 'react';
import Newsfeed from '../components/Newsfeed';
import TodoNote from '../components/TodoNote';

const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <hr></hr>
    <div className="row">
        <Newsfeed />
        <div className="col-2"></div>
        <TodoNote />
      </div>
    </div>
      
  );
};

export default Tools;