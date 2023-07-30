import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BreedDetails = () => {
  const [breed, setBreed] = useState({})

  const { id } = useParams();

  const fetchBreedDetails = async (id) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/${id}`
      );
    const data = await response.json();
    setBreed(data);
  }

  useEffect(() => {
    fetchBreedDetails(id);
  }, [])
  
  

  // const fetchBreedImages = async (breedId) => {
  //   const response = await fetch(
  //     `https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=${breedId}`
  //   );
  //   const data = await response.json();
  //   console.log(data);
  // }

  return (
    <>
    <h1>BreedDetails</h1>
    <p>{breed.origin}</p>
    </>

  )
}

export default BreedDetails;