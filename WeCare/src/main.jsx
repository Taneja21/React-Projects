import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, InstrcutorLogin, LearnerLogin, InstructorSignUp, LeanerSignUp } from "./pages/index.js";
import { Provider } from "react-redux";
import store from "./store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "instructorlogin",
        element: <InstrcutorLogin />,
      },
      {
        path: "learnerlogin",
        element: <LearnerLogin />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "instructorSignUp",
        element: <InstructorSignUp />,
      },
      {
        path: "learnerSignUp",
        element: < LeanerSignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>
);
