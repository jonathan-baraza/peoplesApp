import { useState, useEffect } from "react";
import Item from "./Item";
import axios from "axios";
import Spinner from "./Spinner";
import { useSelector, useDispatch } from "react-redux";
import { getItems, refetchItems } from "./slices/mainSlice";
function Items() {
  const dispatch = useDispatch();
  const { isLoading, error, items, isRefetching } = useSelector(
    (state) => state.main
  );

  useEffect(() => {
    dispatch(getItems());
    const interval = setInterval(() => {
      console.log("Another fetch");
      dispatch(refetchItems());
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="alert alert-warning m-3 text-center mx-auto w-100">
        Something went wrong
      </div>
    );
  }

  return (
    <div id="itemsContainer">
      <table className="table m-2 mx-auto table-bordered table-striped">
        <thead className="bg-dark text-light text-center">
          <tr className="text-center">
            <th colSpan={5} className=" " style={{ position: "relative" }}>
              All ITEMS
              {isRefetching && (
                <small style={{ position: "absolute", right: "20px" }}>
                  Refetching items...
                </small>
              )}
            </th>
          </tr>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
            <th colSpan={2}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {items && items.map((item) => <Item key={item.id} item={item} />)}
          {items.length === 0 && (
            <tr className="p-3">
              <td
                colSpan={5}
                className="alert alert-warning m-3 text-center mx-auto w-100"
              >
                There are no items currently
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Items;
