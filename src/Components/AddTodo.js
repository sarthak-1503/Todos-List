import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function AddTodo(props) {
  let [date, setDate] = useState('');
  let [work, setWork] = useState('');
  let [website, setWebsite] = useState('');

  let submit = (e) => {
    e.preventDefault();

    if (!date || !work || !website) {
      alert('No field can be empty!');
    } else {
      props.addTodo(date, work, website);
      {
        setDate('');
      }
      {
        setWebsite('');
      }
      {
        setWork('');
      }
    }
  };

  return (
    <>
      <div
        className="container my-5"
        style={{ width: '50%', minHeight: '77vh' }}
      >
        <h3 className="text-center my-3">Add Todo</h3>
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="todo-date" className="font-weight-bold">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="form-control"
              id="todo-date"
              placeholder="Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="work" className="font-weight-bold">
              Work
            </label>
            <input
              type="text"
              value={work}
              onChange={(e) => setWork(e.target.value)}
              className="form-control"
              id="work"
              placeholder="Work"
            />
          </div>
          <div className="form-group">
            <label htmlFor="website" className="font-weight-bold">
              Website
            </label>
            <input
              type="text"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="form-control"
              id="website"
              placeholder="Website"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="text-center my-3">
          <Link to="/">Check your Todos List</Link>
        </div>
      </div>
    </>
  );
}
