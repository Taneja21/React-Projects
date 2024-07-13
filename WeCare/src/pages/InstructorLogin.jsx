import React from "react";
import { Login as Loginform } from "../components/index";
import { instructorLogin } from "../store/features/authSlice";
import Auth from "../../jsonServer-BE/authServices";

function InstrcutorLogin() {
  return (
    <Loginform
      storeLogin={instructorLogin}
      auth={Auth.authenticateInstructor}
    />
  );
}

export default InstrcutorLogin;
