import "./App.css";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Achievements from "./pages/Achievements";
import Team from "./pages/Team";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
    {/* background-image  */}
      <div className="bg-[url(../images/Background.png)]">

      {/* background-colour */}
      {/* <div className="bg-white"> */}
        <Navbar path={pathname} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
