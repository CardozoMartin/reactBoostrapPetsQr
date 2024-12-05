import React from 'react';
import { getCommetFn } from '../../Api/ApiComments';
import { useQuery } from '@tanstack/react-query';
import EmblaCarousel from '../../Carrusel/EmblaCarousel';
import CommentSkeletor from './CommentSkeletor';
import ErrorAlert from './ErrorComment';

const Commets = () => {
  // Usamos 'staleTime' para evitar que la consulta se ejecute constantemente
  const {
    data,
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['commets'],
    queryFn: getCommetFn,
    staleTime: Infinity,  // No volver a ejecutar la consulta después de la primera vez
    cacheTime: Infinity,  // Mantener los datos en caché por siempre
  });

  if (isError) {
    return <ErrorAlert />;
  }

  // Asegúrate de que data sea un objeto con una propiedad 'data' que sea un array
  const commets = data && Array.isArray(data.data) ? data.data : [];

  return (
    <>
      {isLoading ? (
        <CommentSkeletor />
      ) : (
        <EmblaCarousel comments={commets} />
      )}
    </>
  );
};

export default Commets;
