import React from "react";
import "../css/Footer.css";

function Footer() {
  return (
    <div className="box-footer">
      <div className="box-footer-left">
        <p style={{ color: "#37B7C3" }}>© 2024 WeC@re. All rights reserved.</p>
      </div>
      <div className="box-footer-right">
        <button>About US</button>
        <button>Privacy Policy</button>
        <button>Facebook</button>
      </div>
    </div>
  );
}

export default Footer;
