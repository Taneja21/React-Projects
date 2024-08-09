import React, { useState } from "react";
import Logo from "./Logo";
import "../css/SignUp.css";
import {useNavigate} from 'react-router-dom'
import Auth from '../../jsonServer-BE/authServices'
import {learnerLogin} from '../store/features/authSlice'
import {useDispatch} from 'react-redux'

export default function LeanerSignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [interest, setInterest] = useState([]);
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [password, setPassword] = useState("");
  const [cnfpassword, setCnfpassword] = useState("");
  const [pskError, setPskError] = useState("");
  const [userError, setUserError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

   const handleInterest = (e) => {
     const value = e.target.value;
     const checked = e.target.checked;

     if (checked) {
       setInterest([...interest, value]);
     } else {
       setInterest(interest.filter((interest) => interest !== value));
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
     if (pskError === "") {
       try {
         const user = await Auth.registerLearner({
           name,
           email,
           phone,
           gender,
           dob,
           interest,
           country,
           state,
           city,
           pincode,
           password,
         });
         if (user) {
           dispatch(learnerLogin({user}))
           navigate("/");
         } else {
           setUserError("User is already registered!");
         }
       } catch (error) {}
     }

     console.log();
   };

  return (
    <>
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
              type="email"
              className="form-control"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
              required
            />
          </div>

          {/* Phone  */}
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              value={phone}
            />
          </div>

          {/* Gender  */}
          <div className="col-lg-4">
            <fieldset>
              <legend className="col-form-label pt-0 form-label">Gender</legend>
              <div className="row m-3">
                <div className="form-check col-lg-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="Male"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="gridRadios1">
                    Male
                  </label>
                </div>
                <div className="form-check col-lg-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios2"
                    value="Female"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="gridRadios2">
                    Female
                  </label>
                </div>
                <div className="form-check col-lg-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios3"
                    value="Others"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                  />
                  <label className="form-check-label" htmlFor="gridRadios3">
                    Others
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          {/* DOB  */}
          <div className="col-md-4">
            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              onChange={(e) => {
                setDob(e.target.value);
              }}
              value={dob}
            />
          </div>

          {/* Looking for?  */}
          <div className="col-md-12">
            <fieldset>
              <legend className="col-form-label pt-0 form-label">
                Looking for?
              </legend>
              <div className="row m-lg-3">
                <div className="form-check col-lg-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="development"
                    value="Development"
                    onChange={handleInterest}
                  />
                  <label className="form-check-label" htmlFor="development">
                    Development
                  </label>
                </div>
                <div className="form-check col-lg-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="business"
                    value="Business"
                    onChange={handleInterest}
                  />
                  <label className="form-check-label" htmlFor="business">
                    Business
                  </label>
                </div>
                <div className="form-check col-lg-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="finance and accounting"
                    value="Finance & Accounting"
                    onChange={handleInterest}
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
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="it and software"
                    value="IT & Software"
                    onChange={handleInterest}
                  />
                  <label className="form-check-label" htmlFor="it and software">
                    IT and Software
                  </label>
                </div>
              </div>
              <div className="row m-lg-3">
                <div className="form-check col-lg-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="officeproductivity"
                    value="Office Productivity"
                    onChange={handleInterest}
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
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="personaldevelopment"
                    value="Personal Development"
                    onChange={handleInterest}
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
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="design"
                    value="Design"
                    onChange={handleInterest}
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
                    onChange={handleInterest}
                  />
                  <label className="form-check-label" htmlFor="marketing">
                    Marketing
                  </label>
                </div>
              </div>
              <div className="row m-lg-3 mb-0">
                <div className="form-check col-lg-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="healthandfitness"
                    value="Health & Fitness"
                    onChange={handleInterest}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="healthandfitness"
                  >
                    Health & Fitness
                  </label>
                </div>
                <div className="form-check col-lg-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="music"
                    value="Music"
                    onChange={handleInterest}
                  />
                  <label className="form-check-label" htmlFor="music">
                    Music
                  </label>
                </div>
              </div>
            </fieldset>
          </div>

          {/* Country */}
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input
              type="text"
              className="form-control"
              id="country"
              onChange={(e) => {
                setCountry(e.target.value);
              }}
              value={country}
            />
          </div>

          {/* State */}
          <div className="col-md-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input
              type="text"
              className="form-control"
              id="state"
              onChange={(e) => {
                setState(e.target.value);
              }}
              value={state}
            />
          </div>

          {/* City */}
          <div className="col-md-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              value={city}
            />
          </div>

          {/* PinCode */}
          <div className="col-md-3">
            <label htmlFor="pincode" className="form-label">
              PinCode
            </label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              onChange={(e) => {
                setPincode(e.target.value);
              }}
              value={pincode}
            />
          </div>

          {/* Password */}
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
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
            <button
              type="submit"
              className="btn btn-primary"
              onSubmit={handleSubmit}
            >
              Create Account
            </button>
            <br />
            <br />
            {userError ? (
              <span style={{ color: "red" }}>{userError}</span>
            ) : null}
          </div>
        </form>
      </div>
    </>
  );
}
