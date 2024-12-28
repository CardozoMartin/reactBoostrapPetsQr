import React, { useState } from "react";
import imgPet from "../img/Home/left.png";
import imgPet2 from "../img/Home/portrait.png";
import LoginPageViews from "./LoginPageViews";
import FormPets from "../Components/Pets/FormPets/FormPets";
import PetGallery from "../Components/Pets/PetsCard/PetGallery";
import FormCommets from "../Components/User/Comments/FormComents/FormComments";
import Commets from "../Components/User/Comments/Comments";
import Contact from "../Components/User/Contact/Contact";
import { useSession } from "../Components/Store/UseSession";
import { Link } from "react-router-dom";
import imgPet3 from "../img/welcome.svg";
const HomePageViews = () => {
  const { isLoggedIn, logout, user } = useSession();
  const [isAddPet, setIsAddPet] = useState(false);
  const [getPet, setGetPet] = useState(false);
  const [isDatosUser, setIsDatosUser] = useState(false);
  const [isEditPet, setIsEditPet] = useState(false);
  
  return (
    <>

      {!isLoggedIn &&
        <section id="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7  pt-lg-0 order-2  order-lg-1 d-flex align-items-center">
                <div data-aos="zoom-out">
                  <h1>
                    Mantén a tu mascota siempre cerca, con solo un escaneo.
                    <span>El QR que garantiza su seguridad.</span>
                  </h1>
                  <h2>
                    Conéctate con tu mascota de manera fácil y rápida. Descubre cómo nuestro QR para mascotas puede ofrecerte tranquilidad.
                  </h2>

                  <div className="text-center text-lg-start">
                    <Link to={"/register"} className="btn-get-started scrollto">
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
                <img src={imgPet} className="img-fluid animated" alt="" />
              </div>
            </div>
          </div>

          <svg
            className="hero-waves"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="wave1">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="3"
                fill="rgba(255,255,255, .1)"
              />
            </g>
            <g className="wave2">
              <use
                xlinkHref="#wave-path"
                x="50"
                y="0"
                fill="rgba(255,255,255, .2)"
              />
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
            </g>
          </svg>
        </section>

      }

      {!isLoggedIn &&
        <section>
          <LoginPageViews></LoginPageViews>
        </section>
      }
      {!isLoggedIn &&

        <section>
          <article>
            <section id="about" className="about">
              <div className="container-fluid">
                <div className="row">
                  <div
                    className="col-xl-5 col-lg-6  d-flex justify-content-center align-items-stretch"
                    data-aos="fade-right"
                  >
                    <img src={imgPet2} alt="" className="img-fluid w-50" />
                  </div>

                  <div
                    className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5"
                    data-aos="fade-left"
                  >
                    <h3>Sabias que ??</h3>
                    <p>
                      El 80% de las mascotas que se pierden sin identificador
                      nunca regresan a casa !!!
                    </p>

                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="100"
                    >
                      <div className="icon">
                        <i class="bi bi-qr-code"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Codigo QR</a>
                      </h4>
                      <p className="description">
                        Con un simple escaneo, tendrás toda la información de tu mascota al alcance de tu mano. ¡Nunca ha sido tan fácil mantener a tu mascota segura!z
                      </p>
                    </div>

                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="200"
                    >
                      <div className="icon">
                        <i class="bi bi-person-lines-fill"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Seguridad y tranquilidad</a>
                      </h4>
                      <p className="description">
                        Si tu mascota se pierde, cualquier persona puede escanear el código QR y ponerse en contacto contigo de inmediato. ¡Recupera a tu mejor amigo más rápido!
                      </p>
                    </div>



                    <div
                      className="icon-box"
                      data-aos="zoom-in"
                      data-aos-delay="300"
                    >
                      <div className="icon">
                        <i class="bi bi-emoji-smile-fill"></i>
                      </div>
                      <h4 className="title">
                        <a href="">Lo mejor de todo !</a>
                      </h4>
                      <p className="description">
                        Es totalmente gratis mantener tu mascota segura !
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </section>
      }

      {isLoggedIn &&
        <section>
          <img src={imgPet3} alt="" className="img-fluid w-25 mx-auto d-block" />
          <h1 className="text-center fw-bold">Bienvenido {user.name}</h1>
        </section>
      }

      {isLoggedIn &&
        <section className="d-flex justify-content-center">

          {isAddPet ?
            <button className="btn btn-danger mx-2" onClick={() => { setIsAddPet(false); setGetPet(false) }}>Cerrar</button>
            :
            <button className="btn btn-primary mx-2" onClick={() => { setIsAddPet(!isAddPet); setGetPet(false) }}>Agregar mascota</button>


          }
          {getPet ?
            <button className="btn btn-danger mx-2" onClick={() => { setGetPet(false); setIsAddPet(false) }}>Cerrar</button>

            :
            <button className="btn btn-primary mx-2" onClick={() => { setGetPet(!getPet) }}>Ver mascotas</button>

          }

        </section>
      }


      <section>
        {isLoggedIn &&
          <article>
            {isAddPet && <FormPets></FormPets>}

          </article>}
        {isLoggedIn &&
          <article>
            {getPet && <PetGallery></PetGallery>}
          </article>}

        <article>
          {isLoggedIn &&
            <FormCommets></FormCommets>}
          <Commets></Commets>
        </article>
      </section>
      <section>
        <Contact></Contact>
      </section>
    </>
  );
};

export default HomePageViews;
