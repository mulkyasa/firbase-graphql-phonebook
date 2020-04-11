import React from "react";

export default function PhonebookItem(props) {
  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{props.user.Name}</td>
      <td>{props.user.Number}</td>
      <td>
        <button className="btn text-dark border-right">
          <small className="fa fa-edit mx-sm-2"></small>
        </button>
        <button onClick={props.delete} className="btn text-dark">
          <small className="fas fa-trash-alt mx-sm-2"></small>
        </button>
      </td>
    </tr>
  );
}
