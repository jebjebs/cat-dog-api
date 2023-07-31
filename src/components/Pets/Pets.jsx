import React, { useState, useEffect } from "react";
import Pet from "./Pet/Pet";
import { Box, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, Typography } from "@mui/material";

const Pets = ({ onShowBreedDetails }) => {
  const [pets, setPets] = useState([]) //state for all pet breeds
  const [pet, setPet] = useState({})
  const [page, setPage] = useState(0) //for displaying specific page list for breeds
  const [rowsPerPage, setRowsPerPage] = useState(10)

  const fetchPets = async () => {
    try {
      const catResponse = await fetch(
        "https://api.thecatapi.com/v1/breeds"
      )
      const dogResponse = await fetch(
        "https://api.thedogapi.com/v1/breeds"
      )
      const catData = await catResponse.json();
      const dogData = await dogResponse.json();
      
      const cats = catData.map((cat) => ({...cat, isCat:true}))
      const dogs = dogData.map((dog) => ({...dog, isCat:false}))
      
      // sort all pets by breed name (A-Z)
      setPets([...cats, ...dogs].sort((a, b) => a.name > b.name ? 1 : -1));


    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchPets();
  }, [])


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
    <Box my={3} mx={2}>
      <TableContainer mt="3" component={Paper}>
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
                  <Pet pet={pet}></Pet>
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
    </Box>
  )
}


export default Pets;