import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn";
import Landing from "./pages/Landing";


function App() {
  return (
    <React.Fragment>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/landing" element={<Landing/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
