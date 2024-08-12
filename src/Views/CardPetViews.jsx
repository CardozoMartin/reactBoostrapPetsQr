import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import { getPetByIdFn } from '../Components/Api/ApiPet';
import ButtonGroup from '../Components/Utils/input/ButtonGroup';
import GoogleMapEmbed from '../Components/Utils/Maps/GoogleMapEmbed';

const CardPetViews = () => {
    const { petId } = useParams(); // Obtiene el petId de la URL usando useParams

    const { data: pet, isLoading, isError } = useQuery({
      queryKey: ["pet-by-id", petId],
      queryFn: () => getPetByIdFn(petId),
    });
  
    const [modalIsOpen, setModalIsOpen] = useState(false);
  
    const openModal = () => {
      setModalIsOpen(true);
    };
  
    const closeModal = () => {
      setModalIsOpen(false);
    };
  
    if (isLoading) {
      return (
        <div className="container mt-5">
          <h1>Cargando...</h1>
          <hr />
        </div>
      );
    }
  
    if (isError) {
      return (
        <div className="container mt-5">
          <h1>Error</h1>
          <hr />
          <div className="alert alert-danger">Ocurrió un error</div>
        </div>
      );
    }
  
    if (pet) {
      return (
        <div className="container mt-5 card o-hidden border-0 shadow-lg my-5">
          <div className="bg-light p-4 border rounded">
            <div className="text-center">
              <div className="position-relative">
                <img
                  src={pet.data.image}
                  className="img-fluid rounded-circle cursor-pointer shadow"
                  alt={pet.data.name}
                  style={{ width: '150px', height: '150px' }}
                  onClick={openModal}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <h1>
                <small className="text-muted">Me llamo : </small>
                {pet.data.name}
              </h1>
              <p className="text-muted">Raza: {pet.data.raza}</p>
              <p className="mt-3">{pet.data.content}</p>
              <h4 className="mt-4">INFORMACION DE CONTACTO</h4>
              <ButtonGroup pet={pet} />
              <div className="">
                <button className='btn btn-ig'  href={`https://www.instagram.com/${pet.data.instagram}/`} target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-instagram"></i> Instagram
                </button>
              </div>
              <p className="mt-3 font-weight-bold">Dirección: {pet.data.direccion}</p>
            </div>
            <GoogleMapEmbed address={pet.data.direccion} />
          </div>
  
          {/* Modal para mostrar la imagen en tamaño completo */}
         
        </div>
      );
    }
  
    return null;
}

export default CardPetViews