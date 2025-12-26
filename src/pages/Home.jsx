import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Rocket from "./Rocket.jsx";
import Workspace from "./Workspace.jsx";
import Switch from "../components/common/Switch.jsx";
import rocketIcon from "../assets/imgs/icon/favicon.ico"; 
import workspaceIcon from "../assets/imgs/icon/favicon-hexschool-logo.ico";
function Home() {
  const location = useLocation();

  useEffect(() => {
    let link = document.querySelector("link[rel~='icon']");
    switch (location.pathname) {
      case "/rocket":
        document.title = "Bootcamp Rocket";
        link.href = rocketIcon;
        break;
      case "/workspace":
        document.title = "Co-working Space";
        link.href = workspaceIcon;
        break;
      default:
        document.title = "Bootcamp Rocket";
        link.href = rocketIcon;
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