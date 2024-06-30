import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "./Components/index";
import "./App.css";

function App() {
  return (
    <>
      <div className="container-app">
        <div className="container-app-top">
          <Header />
        </div>
        <div className="container-app-middle">
          <Outlet />
        </div>
        <div className="container-app-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
