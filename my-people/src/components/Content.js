import { useState } from "react";
import Form from "./Form";
import Items from "./Items";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "./slices/mainSlice";
function Content() {
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.main.isFormOpen);
  return (
    <div className="content row ms-0 me-0 border-right">
      {showForm ? (
        <div className="col-sm-6 mx-auto p-3">
          <Form />
        </div>
      ) : (
        <div className="col-sm-10 mx-auto p-3">
          <Items />
        </div>
      )}
    </div>
  );
}

export default Content;
