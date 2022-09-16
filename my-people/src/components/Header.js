import { GiThreeFriends } from "react-icons/gi";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaUser, FaWpforms } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { mainActions } from "./slices/mainSlice";
function Header() {
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.main.isFormOpen);
  return (
    <div>
      <nav className="navbar ms-0 me-0 navbar-expand-lg navbar-light nav p-3">
        <div className="container-fluid ps-3 pe-3">
          <h3 className="navbar-brand fw-bold">
            My People Application <GiThreeFriends className="text-black" />
          </h3>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li
                className="nav-item"
                onClick={() => {
                  dispatch(mainActions.showForm());
                }}
              >
                <span
                  className="nav-link"
                  style={{
                    borderBottom: `${isFormOpen ? "1px solid black" : ""}`,
                  }}
                >
                  Show Form <FaWpforms size={20} />
                </span>
              </li>
              <li
                className="nav-item"
                onClick={() => {
                  dispatch(mainActions.showItems());
                }}
              >
                <span
                  className="nav-link"
                  style={{
                    borderBottom: `${!isFormOpen ? "1px solid black" : ""}`,
                  }}
                >
                  Show Users
                  <FaUser size={20} />
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
