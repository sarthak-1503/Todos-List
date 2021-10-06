import React from 'react';
import TodoItem from './TodoItem';

export const Todos = (props) => {
  let todosStyle = {
    textAlign: 'center',
    margin: '2rem auto',
  };

  let rowCellsStyle = {
    border: '2px solid black',
    textAlign: 'center',
  };

  return (
    <>
      <div
        className="container"
        style={{ minHeight: '68vh', margin: '2.5rem auto' }}
      >
        <h3 className="text-center">My Todos List</h3>
        <div className="text-center" style={todosStyle}>
          {props.todos.length == 0 ? (
            <p>No todos available</p>
          ) : (
            <table style={{ border: '2px solid black', margin: '2rem auto' }}>
              <tr>
                <th style={rowCellsStyle} className="py-2 px-2">
                  Todo ID
                </th>
                <th style={rowCellsStyle} className="py-2 px-2">
                  Date
                </th>
                <th style={rowCellsStyle} className="py-2 px-2">
                  Title
                </th>
                <th style={rowCellsStyle} className="py-2 px-2">
                  Website
                </th>
                <th style={rowCellsStyle} className="py-2 px-2">
                  Actions
                </th>
              </tr>

              {props.todos.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    rowCellsStyle={rowCellsStyle}
                    deleteTodo={props.deleteTodo}
                    key={todo.id}
                  />
                );
              })}
            </table>
          )}
        </div>
      </div>
    </>
  );
};
