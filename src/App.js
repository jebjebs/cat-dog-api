import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <>
      <h1><Link to="/">The Cat Dog Project</Link></h1>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route />
      </Routes>
    </>
  )
}

export default App;
