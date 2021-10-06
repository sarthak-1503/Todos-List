import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const About = () => {
  let aboutStyle = {
    width: '70%',
    margin: '3.5rem auto',
    minHeight: '63vh',
  };

  let imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
  };

  return (
    <>
      <div className="container" style={aboutStyle}>
        <h2 style={{ margin: '3rem auto' }}>
          MyTodoList.com - by <b>Sarthak Arora</b>
        </h2>
        <div className="row">
          <div className="col-2">
            <img
              src="https://bit.ly/3ugufq1"
              alt="Todo List"
              style={imageStyle}
            />
          </div>
          <div className="col-10 text-justify" style={{ width: '65%' }}>
            <p>
              This project is created by <b>Sarthak Arora</b> and it aims at
              creating a Todo List for daily schedule. This project is made
              using React.js and has functionalities like deleting, adding,
              editing a todo and all the todos are maintained inside a table.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
