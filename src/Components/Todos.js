import React from "react";
import TodoItem from "./TodoItem";

export const Todos = (props) => {
  let todosStyle = {
    textAlign: "center",
    margin: "2rem auto",
  };

  let rowCellsStyle = {
    border: "2px solid black",
    textAlign: "center",
  };

  return (
    <>
      <div
        className="container"
        style={{ minHeight: "79vh", margin: "2.5rem auto" }}
      >
        <h3 className="text-center">My Todos List</h3>
        <div className="text-center" style={todosStyle}>
          {props.todos.length == 0 ? (
            <p>No todos available</p>
          ) : (
            <>
              <div class="row" style={{width: "90%"}}>
                <div class="col-6" style={{textAlign:"right"}}>
                  <select>
                    <option default disabled>
                      Search by
                    </option>
                    <option>Todo ID</option>
                    <option>Date</option>
                    <option>Title</option>
                    <option>Website</option>
                  </select>
                </div>
                <div class="col-6" style={{textAlign:"left"}}>
                  <input type="search" placeholder="Search" />
                </div>
              </div>
              <table style={{ border: "2px solid black", margin: "2rem auto" }}>
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
            </>
          )}
        </div>
      </div>
    </>
  );
};
