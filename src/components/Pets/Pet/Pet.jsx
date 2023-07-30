import React from "react";
import { Button, TableCell } from '@mui/material';

const Pet = ({ pet, onShowBreedDetails }) => {
  // fetch /breed/:breed_id here
  return (
    // <Button variant="contained" onClick={() => onShowBreedDetails(pet.id)}>{ pet.name }</Button>
    <>
      <TableCell>{pet.name}</TableCell>
      <TableCell>Cat</TableCell>
      <TableCell>{pet.origin}</TableCell>
      <TableCell><Button>View</Button></TableCell>
    </>
  )
}
export default Pet;