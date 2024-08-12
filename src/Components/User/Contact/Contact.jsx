import { useRef } from "react";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
   
    const message = form.current.message.value.trim();
    
    if ( !message) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos Vacíos',
        text: 'Por favor, completa todos los campos antes de enviar.',
        confirmButtonText: 'Aceptar',
      });
      return;
    }
    
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: '¡Correo enviado!',
            text: 'Tu mensaje ha sido enviado exitosamente.',
            confirmButtonText: 'Aceptar',
          });
          form.current.reset();
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Ocurrió un error, intenta más tarde.',
            confirmButtonText: 'Aceptar',
          });
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Contacto</h2>
          <p>Contáctanos</p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Ubicacion:</h4>
                <p>Argentina-Tucumán</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>petsqr@gmail.com</p>
              </div>
              
            </div>
          </div>

          <div className="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">
            <form ref={form} onSubmit={sendEmail} role="form" className="php-email-form">
             
              
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows="5"
                  placeholder="Ingresa tu mensaje recuerda dejar en el mensaje su nombre y email"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Tu mensaje ha sido enviado. ¡Gracias!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Enviar mensaje</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
