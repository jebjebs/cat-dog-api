import React, { useState, useEffect } from "react";
import Pet from "./Pet/Pet";
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper } from "@mui/material";

const Pets = ({ onShowBreedDetails }) => {
  const [pets, setPets] = useState([]) //state for all pet breeds
  const [pet, setPet] = useState("")
  const [page, setPage] = useState(0) //for displaying specific page list for breeds
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const fetchPets = async () => {
    const response = await fetch(
      "https://api.thecatapi.com/v1/breeds"
    )
    const data = await response.json();
    setPets(data);
  }

  useEffect(() => {
    fetchPets();
  }, [])

  
  const fetchBreed = async (breedId) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/${breedId}`
    );
    const data = await response.json();
    setPet(data);
  }

  const fetchBreedImages = async (breedId) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`
    );
    const data = await response.json();
    console.log(data);
  }
  
  const handleShowBreedDetails = (petId) => {
    // fetch specific breed details
    fetchBreed(petId);
    // fetch images for specific breed
    fetchBreedImages(petId);
  }

  // Functions for table pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }
  /////////////////////


  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Breed</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Origin</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {pets
              .slice(rowsPerPage * page, rowsPerPage * page + rowsPerPage)
              .map((pet) => (
                <TableRow key={pet.id}>
                  <Pet pet={pet} onShowBreedDetails={handleShowBreedDetails}></Pet>
                </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component={Paper}
          rowsPerPageOptions={[5, 10, 25]}
          count={pets.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </>
  )
}


export default Pets;