import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import { Todos } from './Components/Todos';
import AddTodo from './Components/AddTodo';
import { About } from './Components/About';
import { Footer } from './Components/Footer';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export default function App() {
  let initTodo;

  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }

  let deleteTodo = (todo) => {
    setTodo(todos.filter((Todo) => Todo != todo));
  };

  let addTodo = (date, work, website) => {
    let id;

    if (todos.length == 0) {
      id = 1;
    } else {
      id = todos[todos.length - 1].id + 1;
    }

    let myTodo = {
      id: id,
      date: date,
      work: work,
      website: website,
    };

    setTodo([...todos, myTodo]);
  };

  const [todos, setTodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Todos todos={todos} deleteTodo={deleteTodo} />
          </Route>
          <Route exact path="/addtodo">
            <AddTodo addTodo={addTodo} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}
