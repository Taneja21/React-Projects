import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

function Header() {
  return (
    <div className="container-header">
      <div className="container-header-left">
        <h2>Hi</h2>
        <p>Hello</p>
      </div>
      <div className="container-header-middle">
        <button>Home</button>
        <button>Services</button>
        <button>Book</button>
      </div>
      <div className="container-header-right">
        <button>Login</button>
        <button>SingUp</button>
      </div>
    </div>
  );
}

export default Header;
