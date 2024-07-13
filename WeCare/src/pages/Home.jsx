import React from "react";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Index() {
  const storeStatus = useSelector((state) => state.authentication.authStatus);
  const userdata = useSelector((state) => state.authentication.userData);
  const instructor = useSelector((state) => state.authentication.isInstrcutor);
  const learner = useSelector((state) => state.authentication.isLearner);

  if (!storeStatus) {
    return (
      <div className="box-home">
        <div className="box-home-form">
          <div className="home-form-top">
            <h1>Instructor</h1>
          </div>
          <div className="home-form-middle">
            <h3>Log into Your Account</h3>
            <Link to="instructorlogin">
              <button className="home-login-button">Login</button>
            </Link>
          </div>
          <div className="home-form-bottom">
            <p>
              Do not have Account?{" "}
              <span>
                <Link to="signup" style={{ color: "red" }}>
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
        <div className="box-home-form">
          <div className="home-form-top">
            <h1>Learner</h1>
          </div>
          <div className="home-form-middle">
            <h3>Log into Your Account</h3>
            <Link to="learnerlogin">
              <button className="home-login-button">Login</button>
            </Link>
          </div>
          <div className="home-form-bottom">
            <p>
              Do not have Account?{" "}
              <span>
                <Link to="signup" style={{ color: "red" }}>
                  Sign Up
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (instructor) {
    return (
      <div>
        <h1>Instructor</h1>
        <p>{userdata.name}</p>
      </div>
    );
  }

  if (learner) {
    return (
      <div>
        <h1>Learner</h1>
        <p>{userdata.name}</p>
      </div>
    );
  }
}

export default Index;

<div class="nm2-bg-light nm2-radius-md nm2-inner-glow nm2-shadow-sm nm2-padding-md nm2-text-center">
  <div class="nm2-max-width-xs nm2-margin-x-auto">
    <div class="nm2-margin-bottom-xs">
      <svg class="nm2-icon nm2-icon--xl" viewBox="0 0 64 64" aria-hidden="true">
        <path
          d="M54.053,33.3l-21-13a2,2,0,0,0-2.106,0l-21,13A2,2,0,0,0,9,35V58a2,2,0,0,0,2,2H53a2,2,0,0,0,2-2V35A2,2,0,0,0,54.053,33.3Z"
          fill="#212121"
        />
        <path d="M47,51H17V16a2,2,0,0,1,2-2H45a2,2,0,0,1,2,2Z" fill="#e3e3e3" />
        <path d="M40,23H24a1,1,0,0,1,0-2H40a1,1,0,0,1,0,2Z" fill="#aeaeae" />
        <path d="M40,30H24a1,1,0,0,1,0-2H40a1,1,0,0,1,0,2Z" fill="#aeaeae" />
        <path d="M33,37H24a1,1,0,0,1,0-2h9a1,1,0,0,1,0,2Z" fill="#aeaeae" />
        <path
          d="M55,35,32,45.867,9,35V58c0,.015,0,.029,0,.044a1.927,1.927,0,0,0,.027.26c.006.04.008.081.016.12l0,.016c0,.006.006.009.008.014A2,2,0,0,0,11,60H53a2,2,0,0,0,1.951-1.56A1.916,1.916,0,0,0,55,58.022c0-.008.006-.013.006-.022Z"
          fill="#949494"
        />
        <path
          d="M13,7.029a3,3,0,0,1-3-3,1,1,0,0,0-2,0,3,3,0,0,1-3,3,1,1,0,0,0,0,2,3,3,0,0,1,3,3,1,1,0,0,0,2,0,3,3,0,0,1,3-3,1,1,0,0,0,0-2Z"
          fill="#ffd764"
        />
        <circle cx="55" cy="14" r="3" fill="#ff7163" />
      </svg>
    </div>

    <div class="nm2-text-component nm2-margin-bottom-md">
      <h3>Join our newsletter</h3>
      <p>Get our monthly recap with the latest news, articles and resources.</p>
    </div>

    <form class="nm2-grid nm2-gap-2xs">
      <input
        class="nm2-form-control"
        aria-label="Email"
        type="email"
        placeholder="Email Address"
      />
      <button class="nm2-btn nm2-btn--primary">Subscribe</button>
    </form>

    <p
      class="nm2-text-sm nm2-bg-success nm2-bg-opacity-20% nm2-padding-xs nm2-radius-md nm2-margin-top-xs"
      role="alert"
    >
      <strong>✔ Success!</strong> Welcome aboard, friend!
    </p>

    <div class="nm2-margin-top-sm">
      <p class="nm2-color-contrast-medium nm2-text-sm">
        No spam. Unsubscribe anytime.
      </p>
    </div>
  </div>
</div>;
