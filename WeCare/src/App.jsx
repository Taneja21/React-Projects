import "./css/App.css";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="box-layout">
        <div className="box-layout-top">
          <Header />
        </div>
        <div className="box-layout-middle">
          <Outlet />
        </div>
        <div className="box-layout-bottom">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
