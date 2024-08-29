import React from "react";
// import "../css/Header.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";
import { useNavigate } from "react-router-dom";

function Header() {
  const storeStatus = useSelector((state) => state.authentication.authStatus);
  const isInstrcutor = useSelector(
    (state) => state.authentication.isInstrcutor
  );
  const isLearner = useSelector((state) => state.authentication.isLearner);
  const userData = useSelector((state) => state.authentication.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  const navItems = [
    { name: "DashBoard", route: "/", active: storeStatus },
    { name: "Instructors", route: "/", active: isLearner },
    { name: "My Learnings", route: "/", active: isLearner },
  ];
  return (
    <div style={{ height: "4.5vh" }}>
      {/* My Navbar  */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Logo />
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
            {isInstrcutor ? (
              <div class="btn-group ms-5">
                <button type="button" class="btn btn-secondary">
                  DashBoard
                </button>
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      My Courses
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Create New Course
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Schedule Meeting
                    </a>
                  </li>
                </ul>
              </div>
            ) : null}

            <form className="d-flex ms-auto me-auto w-50" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                Search
              </button>
            </form>

            {storeStatus ? (
              <div class="btn-group me-4">
                <button
                  type="button"
                  class="btn btn-secondary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {userData.name}
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      My Account
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li className="ps-3">
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
