import "./App.css";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
function App() {
  /* For Home page add <Route path='/' element={<Home/>} */
  return (
    <>
      <div className="bg-[url(../images/Background.png)]">
        <Navbar />
        <Routes>
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
