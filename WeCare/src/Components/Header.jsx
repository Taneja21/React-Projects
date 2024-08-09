import React from "react";
// import "../css/Header.css";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/features/authSlice";
import {useNavigate} from 'react-router-dom'

function Header() {
  const storeStatus = useSelector((state) => state.authentication.authStatus);
  const isInstrcutor = useSelector(
    (state) => state.authentication.isInstrcutor
  );
  const isLearner = useSelector((state) => state.authentication.isLearner);
  const userData = useSelector((state) => state.authentication.userData);

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/")
  };

  const navItems = [
    { name: "All Courses", route: "/", active: storeStatus },
    { name: "Instructors", route: "/", active: isLearner },
    { name: "My Learnings", route: "/", active: isLearner },
    { name: "Schedule", route: "/", active: isInstrcutor },
  ];
  return (

    <div style={{ height: "4.5vh" }}>

{/* My Navbar  */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Logo />
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((item) =>
                item.active ? (
                  <li className="nav-item" key={item.name}>
                    <Link
                      className="nav-link"
                      aria-current="page"
                      to={item.route}
                    >
                      {item.name}
                    </Link>
                  </li>
                ) : null
              )}

              {storeStatus ? (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              ) : null}
            </ul>
            {storeStatus ? <h5> {userData.name}</h5> : null}
            {storeStatus ? (
              <button
                className="btn btn-danger"
                onClick={logoutHandler}
                style={{ marginLeft: "15px" }}
              >
                Logout
      </button>
            ) : null}
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Header;
