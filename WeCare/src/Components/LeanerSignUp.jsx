import React from 'react';
import Logo from "./Logo";
import "../css/SignUp.css";

export default function LeanerSignUp() {
  return (
    <>
      
      <div className="signup-box">
        <form className="row g-3">
          <div className="form-logo">
            <Logo />
          </div>
          <h1 style={{ textAlign: "center" }}>Create Your Account</h1>

          {/* Name  */}
          <div className="col-md-6">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" id="name" />
          </div>

          {/* Email  */}
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="password" className="form-control" id="email" />
          </div>

          {/* Phone  */}
          <div className="col-md-4">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input type="text" className="form-control" id="phone" />
          </div>

          {/* Gender  */}
          <div className="col-md-4">
            <fieldset>
              <legend className="col-form-label pt-0 form-label">Gender</legend>
              <div className="row m-3">
                <div className="form-check col-lg-4">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gridRadios"
                    id="gridRadios1"
                    value="option1"
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
                    value="option2"
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
                    value="option3"
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
            <input type="date" className="form-control" id="dob" />
          </div>

          {/* Looking for?  */}
          <div className="col-12">
            <fieldset>
              <legend className="col-form-label pt-0 form-label">
                Looking for?
              </legend>
              <div className="row m-3">
                <div className="form-check col-3">
                  <input
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
                <div className="form-check col-3">
                  <input
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
                <div className="form-check col-3">
                  <input
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
                <div className="form-check col-3">
                  <input
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
              <div className="row m-3">
                <div className="form-check col-3">
                  <input
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
                <div className="form-check col-3">
                  <input
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
                <div className="form-check col-3">
                  <input
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
                <div className="form-check col-3">
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
              <div className="row m-3 mb-0">
                <div className="form-check col-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="domain"
                    id="healthandfitness"
                    value="Health & Fitness"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="healthandfitness"
                  >
                    Health & Fitness
                  </label>
                </div>
                <div className="form-check col-3">
                  <input
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

          {/* Country */}
          <div className="col-md-3">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <input type="text" className="form-control" id="country" />
          </div>

          {/* State */}
          <div className="col-md-3">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <input type="text" className="form-control" id="state" />
          </div>

          {/* City */}
          <div className="col-md-3">
            <label htmlFor="city" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="city" />
          </div>

          {/* PinCode */}
          <div className="col-md-3">
            <label htmlFor="pincode" className="form-label">
              PinCode
            </label>
            <input type="text" className="form-control" id="pincode" />
          </div>

          {/* Password */}
          <div className="col-md-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input type="password" className="form-control" id="password" />
          </div>

          {/* Confirm Password  */}
          <div className="col-md-6">
            <label htmlFor="confirmpassword" className="form-label">
              Confirm Password
            </label>
            <input type="text" className="form-control" id="confirmpassword" />
          </div>

          {/* Button  */}
          <div className="col-12 mt-7">
            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </>
  );
}



;
