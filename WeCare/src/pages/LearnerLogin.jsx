import React from "react";
import { Login as Loginform } from "../components/index";
import { learnerLogin } from "../store/features/authSlice";
import Auth from "../../jsonServer-BE/authServices";

function LearnerLogin() {
  return (
    <Loginform storeLogin={learnerLogin} auth={Auth.authenticateLearner} />
  );
}

export default LearnerLogin;
