import React from 'react';

export default function TodoItem({ todo, rowCellsStyle, deleteTodo }) {
  return (
    <tr>
      <td style={rowCellsStyle} className="py-2 px-2">
        {'#' + JSON.stringify(todo.id)}
      </td>
      <td style={rowCellsStyle} className="py-2 px-2">
        {todo.date}
      </td>
      <td style={rowCellsStyle} className="py-2 px-2">
        {todo.work}
      </td>
      <td style={rowCellsStyle} className="py-2 px-2">
        {todo.website}
      </td>
      <td style={rowCellsStyle} className="py-2 px-2">
        <button className="btn btn-sm btn-primary mx-1">Edit</button>
        <button
          className="btn btn-sm btn-danger mx-1"
          onClick={() => deleteTodo(todo)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
