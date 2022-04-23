import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';
import Home from "./pages/Home.jsx";
import NoPage from "./pages/NoPage.jsx";
import Callback from "./pages/Callback.jsx";
import Signout from "./pages/Signout.jsx";
import Layout from "./pages/Layout.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path='home' element={<Home />} />
          <Route path="callback" element={<Callback />} />
          <Route path="signout" element={<Signout />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
