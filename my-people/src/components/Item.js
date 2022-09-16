import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getItems, mainActions } from "./slices/mainSlice";
function Item({ item: { id, title, body } }) {
  const dispatch = useDispatch();
  return (
    <tr className="text-dark">
      <td>{id}</td>
      <td>{title}</td>
      <td>{body}</td>
      <td>
        <button className="btn btn-warning btn-sm m-2">Edit</button>
      </td>
      <td>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => {
            dispatch(mainActions.deleteItem(id));
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default Item;
