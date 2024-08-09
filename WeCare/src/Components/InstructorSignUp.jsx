import React from "react";
import Logo from "./Logo";
import "../css/SignUp.css";
import { useState } from "react";
import Auth from "../../jsonServer-BE/authServices";
import { useNavigate } from "react-router-dom";
import {useDispatch} from 'react-redux'
import {instructorLogin} from '../store/features/authSlice'

export default function () {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useState([]);
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [pskError, setPskError] = useState("");
  const [userError, setUserError] = useState("")

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDomain = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setDomain([...domain, value]);
    } else {
      setDomain(domain.filter((domain) => domain !== value));
    }
  };

  const handlePassword = (e) => {
    setCnfpassword(e.target.value);
    if (e.target.value == password) {
      setPskError("");
    } else {
      setPskError("Password does not match");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(pskError === ""){
       try {
         const user = await Auth.registerInstrcutor({
           name,
           email,
           phone,
           gender,
           domain,
           password,
         });
         if (user) {
           dispatch(instructorLogin({user}))
           navigate("/");
         } else {
           setUserError("User is already registered!");
         }
       } catch (error) {}
    }
   

    console.log();
  };

  return (
    <div className="signup-box">
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="form-logo">
          <Logo />
        </div>
        <h1 style={{ textAlign: "center" }}>Create Your Account</h1>

        {/* Name  */}
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            type="text"
            className="form-control"
            id="name"
            required
          />
        </div>

        {/* Email  */}
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            type="email"
            className="form-control"
            id="email"
            required
          />
        </div>

        {/* Phone  */}
        <div className="col-md-6">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            value={phone}
            type="text"
            className="form-control"
            id="phone"
          />
        </div>

        {/* Gender  */}
        <div className="col-md-6">
          <fieldset>
            <legend className="col-form-label pt-0 form-label">Gender</legend>
            <div className="row m-3">
              <div className="form-check col-lg-4 ">
                <input
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="insgender1"
                  value="Male"
                />
                <label className="form-check-label" htmlFor="insgender1">
                  Male
                </label>
              </div>
              <div className="form-check col-lg-4">
                <input
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="insgender2"
                  value="Female"
                />
                <label className="form-check-label" htmlFor="insgender2">
                  Female
                </label>
              </div>
              <div className="form-check col-lg-4">
                <input
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id="insgender3"
                  value="Others"
                />
                <label className="form-check-label" htmlFor="insgender3">
                  Others
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Domain  */}
        <div className="col-md-12">
          <fieldset>
            <legend className="col-form-label pt-0 form-label">Domain</legend>
            <div className="row m-lg-3">
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="development"
                  value="Development"
                />
                <label className="form-check-label" htmlFor="development">
                  Development
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="business"
                  value="Business"
                />
                <label className="form-check-label" htmlFor="business">
                  Business
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="finance and accounting"
                  value="Finance & Accounting"
                />
                <label
                  className="form-check-label"
                  htmlFor="finance and accounting"
                >
                  Finance & Accounting
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="it and software"
                  value="IT & Software"
                />
                <label className="form-check-label" htmlFor="it and software">
                  IT and Software
                </label>
              </div>
            </div>
            <div className="row m-lg-3">
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="officeproductivity"
                  value="Office Productivity"
                />
                <label
                  className="form-check-label"
                  htmlFor="officeproductivity"
                >
                  Office Productivity
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="personaldevelopment"
                  value="Personal Development"
                />
                <label
                  className="form-check-label"
                  htmlFor="personaldevelopment"
                >
                  Personal Development
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="design"
                  value="Design"
                />
                <label className="form-check-label" htmlFor="design">
                  Design
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="marketing"
                  value="Marketing"
                />
                <label className="form-check-label" htmlFor="marketing">
                  Marketing
                </label>
              </div>
            </div>
            <div className="row m-lg-3 mb-0">
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="healthandfitness"
                  value="Health & Fitness"
                />
                <label className="form-check-label" htmlFor="healthandfitness">
                  Health & Fitness
                </label>
              </div>
              <div className="form-check col-lg-3">
                <input
                  onChange={handleDomain}
                  className="form-check-input"
                  type="checkbox"
                  name="domain"
                  id="music"
                  value="Music"
                />
                <label className="form-check-label" htmlFor="music">
                  Music
                </label>
              </div>
            </div>
          </fieldset>
        </div>

        {/* Password */}
        <div className="col-md-6">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            className="form-control"
            id="password"
            required
          />
        </div>

        {/* Confirm Password  */}
        <div className="col-md-6">
          <label htmlFor="confirmpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            id="confirmpassword"
            onChange={handlePassword}
            value={cnfpassword}
            required
          />
          {pskError ? <span style={{ color: "red" }}>{pskError}</span> : null}
        </div>

        {/* Button  */}
        <div className="col-12 mt-7">
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
          <br/>
          <br/>
          {userError? (<span style={{color:"red"}}>{userError}</span>) : (null)}
        </div>
      </form>
    </div>
  );
}
