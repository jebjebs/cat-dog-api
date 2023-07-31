import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const BreedDetails = () => {
  const { state } = useLocation();
  const breed = state;

  const [breedImage, setBreedImage] = useState({})
  
  const fetchBreedImages = async (breedId) => {
    const apiLink = breed.isCat ? 
      `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`
      : `https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`
    
    const response = await fetch(
      apiLink
    );
    const data = await response.json();
    console.log(data);
    setBreedImage(data[0]);
  }

  useEffect(() => {
    fetchBreedImages(breed.id);
  }, [])
  

  return (
    <>
    <h1>{breed.name}</h1>
    <h3>{breed.origin}</h3>
    <img width="200px" src={breedImage.url} alt="" />
    <h5>{breed.temperament}</h5>
    <p>{breed.description}</p>
    {console.log(breedImage.url)}
    </>

  )
}

export default BreedDetails;