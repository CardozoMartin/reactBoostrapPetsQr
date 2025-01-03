import React, { useState } from "react";
import imgPet from "../img/Home/left.png";
import LoginPageViews from "./LoginPageViews";
import FormPets from "../Components/Pets/FormPets/FormPets";
import PetGallery from "../Components/Pets/PetsCard/PetGallery";
import FormCommets from "../Components/User/Comments/FormComents/FormComments";
import Commets from "../Components/User/Comments/Comments";
import { useSession } from "../Components/Store/UseSession";
import { Link } from "react-router-dom";
import imgPet3 from "../img/welcome.svg";
import { usePet } from "../Components/Store/UsePet";

const HomePageViews = () => {
  const { isLoggedIn, logout, user } = useSession();


  const [getPet, setGetPet] = useState(false);
  const [isDatosUser, setIsDatosUser] = useState(false);
  const [isEditPet, setIsEditPet] = useState(false);
  const { isAddPet, setIsAddPet, setPetToEdit } = usePet();

  

  return (
    <>
      {/* Sección para usuarios no autenticados */}
      {!isLoggedIn && (
        <section id="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-lg-0 order-2 order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1 className="fw-bold "> 
                    ¡Bienvenido a PetsQR
                  </h1>
                  <h2 className="text-dark">
                    Conéctate con tu mascota de manera fácil y rápida. Descubre cómo nuestro QR para mascotas puede ofrecerte tranquilidad.
                  </h2>

                  <div className="text-center text-lg-start">
                    <Link to={"/register"} className="btn btnDark">
                      Registrate
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 order-1 order-lg-2 hero-img"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                <img src={imgPet} className="img-fluid animated" alt="Mascota" />
              </div>
            </div>
          </div>
        </section>
      )}

      {!isLoggedIn && <section><LoginPageViews /></section>}

      {/* Sección para usuarios autenticados */}
      {isLoggedIn && (
        <section>
          <img src={imgPet3} alt="Bienvenida" className="img-fluid w-25 mx-auto d-block" />
          <div className="d-flex justify-content-center">
            {isAddPet ? (
              <button
                className="btn btn-danger mx-2"
                onClick={() => {
                  
                  setIsAddPet(false);
                  setPetToEdit(null);
                }}
              >
                Cerrar
              </button>
            ) : (
              <button
                className="btn btn-primary mx-2"
                onClick={() => {
                  
                  setIsAddPet(true);
                  setPetToEdit(null);
                }}
              >
                Agregar mascota
              </button>
            )}
          </div>
        </section>
      )}

      <section>
        {isLoggedIn && (
          <article>
            {isAddPet ? (
              <>
                
                <FormPets />
              </>
            ) : (
              <>
                
                {""}
              </>
            )}
          </article>
        )}
        {isLoggedIn && (
          <article>
            <PetGallery />
          </article>
        )}

        <article>
          {isLoggedIn && <FormCommets />}
          <Commets />
        </article>
      </section>
    </>
  );
};

export default HomePageViews;
