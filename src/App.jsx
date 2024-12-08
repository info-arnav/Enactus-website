import "./App.css";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Partners from "./pages/Partners";
import Achievements from "./pages/Achievements";
import Team from "./pages/Team";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="bg-[url(../images/Background.png)]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/Achievements" element={<Achievements />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
