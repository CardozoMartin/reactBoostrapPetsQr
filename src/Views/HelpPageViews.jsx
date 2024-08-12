import React, { useState } from 'react';
import "../Components/css/style.css";

const faqData = [
  {
    id: 1,
    question: "¿Qué es un código QR y cómo funciona?",
    answer: "Un código QR (Quick Response) es un tipo de código de barras bidimensional que puede almacenar información, como texto, URL o datos de contacto. Para escanear un código QR, necesitas una aplicación de escaneo de QR en tu teléfono inteligente. Una vez escaneado, el código QR mostrará la información almacenada en él, como los datos de contacto del propietario de la mascota.",
  },
  {
    id: 2,
    question: "¿Cómo genero un código QR para mi mascota?",
    answer: "Primero, debes registrar a tu mascota en la aplicación proporcionando información como su nombre, raza, edad, una foto y tus datos de contacto. Una vez que toda la información esté completa, la aplicación generará un código QR que puedes imprimir y colocar en el collar de tu mascota.",
  },
  {
    id: 3,
    question: "¿Qué información se incluye en el código QR?",
    answer: "El código QR incluye detalles importantes sobre la mascota, como su nombre, raza, edad, una foto, y los datos de contacto del propietario, como nombre, número de teléfono y dirección. También puede incluir información médica relevante, como alergias o condiciones médicas.",
  },
  {
    id: 4,
    question: "¿Es seguro compartir la información de mi mascota a través de un código QR?",
    answer: "Sí, el código QR solo contiene la información que decidas compartir. Asegúrate de proporcionar solo los datos necesarios para la identificación y el contacto. La información está codificada y solo accesible escaneando el código QR.",
  },
  {
    id: 5,
    question: "¿Puedo actualizar la información de mi mascota?",
    answer: "Sí, puedes actualizar la información de tu mascota en cualquier momento a través de la aplicación. Una vez actualizada, genera un nuevo código QR con la información actualizada y reemplaza el antiguo.",
  },
  {
    id: 6,
    question: "¿Qué pasa si el código QR se daña o se pierde?",
    answer: "Sí, puedes volver a ingresar a tu cuenta y volver a descargar el codigo qr asi no tenes que estar generando uno nuevo",
  },
  {
    id: 7,
    question: "¿Puedo usar esta aplicación para varias mascotas?",
    answer: "Sí, puedes registrar múltiples mascotas en la aplicación. Cada mascota tendrá su propio código QR único con su información específica.",
  },
  {
    id: 8,
    question: "¿Qué hago si tengo problemas con la aplicación?",
    answer: "Si encuentras problemas con la aplicación, puedes contactar con nuestro equipo de soporte a través de la sección de ayuda en la aplicación o enviando un correo electrónico a tiin.-@hotmailes . Estaremos encantados de ayudarte",
  },
  {
    id: 9,
    question: "¿Hay algún costo asociado con el uso de la aplicación?",
    answer: "La descarga y el uso básico de la aplicación son gratuitos. Sin embargo, pueden existir características premium adicionales disponibles a través de compras dentro de la aplicación. Consulta nuestra sección de precios para más detalles.",
  },
];

const HelpPageViews = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleFAQ = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Ayuda</h2>
          <p>Preguntas Frecuentes</p>
        </div>

        <div className="faq-list">
          <ul>
            {faqData.map((faq, index) => (
              <li key={faq.id} data-aos="fade-up" data-aos-delay={index * 100}>
                <i className="bx bx-help-circle icon-help"></i>
                <a
                  data-bs-toggle="collapse"
                  className={expanded === faq.id ? '' : 'collapsed'}
                  onClick={() => toggleFAQ(faq.id)}
                >
                  {faq.question}
                  {expanded === faq.id ? (
                    <i className="bi bi-caret-up-fill"></i>
                  ) : (
                    <i className="bi bi-caret-right-fill"></i>
                  )}
                </a>
                <div
                  id={`faq-list-${faq.id}`}
                  className={`collapse ${expanded === faq.id ? 'show' : ''}`}
                  data-bs-parent=".faq-list"
                >
                  <p>{faq.answer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HelpPageViews;
