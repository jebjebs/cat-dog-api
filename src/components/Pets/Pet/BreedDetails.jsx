import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

const BreedDetails = () => {
  // const [breed, setBreed] = useState({})
  const { state } = useLocation();
  const breed = state;
  // const { id } = useParams();
  console.log(state);
  // const fetchBreedDetails = async (id) => {
  //   const response = await fetch(
  //     `https://api.thecatapi.com/v1/breeds/${id}`
  //   );
  //   const data = await response.json();
  //   setBreed(data);
  // }

  // useEffect(() => {
  //   fetchBreedDetails(id);
  // }, [])
  
  

  // const fetchBreedImages = async (breedId) => {
  //   const response = await fetch(
  //     `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }
  return (
    <>
    <h1>{breed.name}</h1>
    <h3>{breed.origin}</h3>
    <h5>{breed.temperament}</h5>
    <p>{breed.description}</p>
    </>

  )
}

export default BreedDetails;