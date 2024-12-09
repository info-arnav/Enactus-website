import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Team from './pages/team';
import './App.css';

const App = () => {
  return (
   <>
      <div className="bg-[url('images/image.png')] bg-contain bg-repeat bg-opacity-75 min-h-screen h-auto w-full">
        <Router>
        <Routes>
          <Route path="/team" element={<Team />} />
        </Routes>
      </Router></div>
   </>
  );
}

export default App;
