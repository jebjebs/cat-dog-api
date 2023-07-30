import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import BreedDetails from "./components/Pets/Pet/BreedDetails";

function App() {
  return (
    <>
      <h1><Link to="/">The Cat Dog Project</Link></h1>
      
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/breeds/:id" element={<BreedDetails />} />
      </Routes>
    </>
  )
}

export default App;
