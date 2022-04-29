import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./views/home";
import "aos/dist/aos.css";
import AOS from "aos";
import ScreenFixedProvider from "./components/contexts/ScreenFixedProvider";
import { useState, useEffect } from "react";
import golden12 from "../src/assets/img/golden12.svg";
import BackToTop from "./components/BackToTop";
function App() {
  AOS.init({ once: true });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <ScreenFixedProvider>
          <Home />
          <BackToTop />
        </ScreenFixedProvider>
      ) : (
        <div className="loading d-flex justify-content-center align-items-center position-relative">
          <div className="">
            {" "}
            <img className="loading_img" src={golden12} alt="" />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
