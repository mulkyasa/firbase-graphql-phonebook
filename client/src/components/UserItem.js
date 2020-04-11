import React from "react";

export default function PhonebookItem(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.user.Name}</td>
      <td>{props.user.Number}</td>
      <td>
        <button type="button" className="btn btn-sm btn-success">
          Edit
        </button>
        <button onClick={props.delete} type="button" className="btn btn-sm btn-danger">
          Delete
        </button>
      </td>
    </tr>
  );
}
