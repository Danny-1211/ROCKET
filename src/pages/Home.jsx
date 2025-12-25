import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Rocket from "./Rocket.jsx";
import Workspace from "./Workspace.jsx";
import Switch from "../components/common/Switch.jsx";

function Home() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/rocket":
        document.title = "Bootcamp Rocket";
        break;
      case "/workspace":
        document.title = "Co-working Space";
        break;
      default:
        document.title = "火箭隊培訓營";
    }
  }, [location]);

  return (
    <>
      <Switch />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/rocket" element={<Rocket />} />
        <Route path="/workspace" element={<Workspace />} />
      </Routes>
    </>
  )
}

export default Home