import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from "./components/common/Header.jsx";
import Footer from "./components/common/Footer";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
