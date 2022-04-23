import React from "react";
import { Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Callback from "./pages/Callback";
import Signout from "./pages/Signout";
import Layout from "./pages/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path="callback" element={<Callback />} />
        <Route path="signout" element={<Signout />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
}

export default App;
