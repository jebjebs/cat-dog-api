import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import BreedDetails from "./components/Pets/Pet/BreedDetails";
import { Typography } from "@mui/material";

function App() {
  return (
    <>
      {/* <Typography variant="h2"><Link to="/">The Cat Dog Project</Link></Typography> */}
      <Typography variant="h5" style={{textDecoration:'none'}} component={Link} to={'/'} color="inherit">The Cat Dog Project</Typography>
      
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/breeds/:id" element={<BreedDetails />} />
      </Routes>
    </>
  )
}

export default App;
