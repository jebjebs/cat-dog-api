import React from "react";
import { Button, TableCell } from '@mui/material';
import { Link } from "react-router-dom";


const Pet = ({ pet }) => {

  return (
    <>
      <TableCell>{pet.name}</TableCell>
      <TableCell>{pet.isCat ? "Cat" : "Dog"}</TableCell>
      <TableCell>{pet.origin}</TableCell>
      <TableCell>
        <Button><Link to={`/breeds/${pet.id}`} state={pet} style={{textDecoration:'none'}}>View</Link></Button>
      </TableCell>
    </>
  )
}
export default Pet;