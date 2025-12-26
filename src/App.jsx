import { HashRouter, Routes, Route  } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
