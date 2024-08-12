import React from 'react';
import { getCommetFn } from '../../Api/ApiComments';

import { useQuery } from '@tanstack/react-query';
import EmblaCarousel from '../../Carrusel/EmblaCarousel';
import CommentSkeletor from './CommentSkeletor';
import ErrorAlert from './ErrorComment';


const Commets = () => {
  const {
    data,
    isError,
    isLoading,
  } = useQuery({ queryKey: ['commets'], queryFn: getCommetFn });

  

  if (isError) {
    return <ErrorAlert></ErrorAlert>;
  }

  // Asegúrate de que data sea un objeto con una propiedad 'data' que sea un array
  const commets = data && Array.isArray(data.data) ? data.data : [];

  return (
    <>
      {isLoading ? (
        <CommentSkeletor></CommentSkeletor>
        
      ) : (
        <EmblaCarousel comments={commets} />
      )}
    </>
  );
};

export default Commets;
