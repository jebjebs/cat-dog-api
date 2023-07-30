import React from "react";
import { Button, TableCell } from '@mui/material';
import { Link } from "react-router-dom";


const Pet = ({ pet }) => {

  return (
    <>
      <TableCell>{pet.name}</TableCell>
      <TableCell>Cat</TableCell>
      <TableCell>{pet.origin}</TableCell>
      <TableCell>
        <Button><Link to={`/breeds/${pet.id}`}>View</Link></Button>
      </TableCell>
    </>
  )
}
export default Pet;