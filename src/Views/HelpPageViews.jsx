import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../styles/Faq.css';  // Importa los estilos CSS para las transiciones

const faqs = [
  {
    question: "¿Qué es un código QR y cómo funciona?",
    answer: "Un código QR (Quick Response) es un tipo de código de barras bidimensional que puede almacenar información, como texto, URL o datos de contacto. Para escanear un código QR, necesitas una aplicación de escaneo de QR en tu teléfono inteligente. Una vez escaneado, el código QR mostrará la información almacenada en él, como los datos de contacto del propietario de la mascota."
  },
  {
    question: "¿Cómo genero un código QR para mi mascota?",
    answer: "Primero, debes registrar a tu mascota en la aplicación proporcionando información como su nombre, raza, edad, una foto y tus datos de contacto. Una vez que toda la información esté completa, la aplicación generará un código QR que puedes imprimir y colocar en el collar de tu mascota."
  },
  {
    question: "¿Qué información se incluye en el código QR?",
    answer: "El código QR incluye detalles importantes sobre la mascota, como su nombre, raza, edad, una foto, y los datos de contacto del propietario, como nombre, número de teléfono y dirección. También puede incluir información médica relevante, como alergias o condiciones médicas."
  },
  {
    question: "¿Es seguro compartir la información de mi mascota a través de un código QR?",
    answer: "Sí, el código QR solo contiene la información que decidas compartir. Asegúrate de proporcionar solo los datos necesarios para la identificación y el contacto. La información está codificada y solo accesible escaneando el código QR."
  },
  {
    question: "¿Puedo actualizar la información de mi mascota?",
    answer: "Sí, puedes actualizar la información de tu mascota en cualquier momento a través de la aplicación. Una vez actualizada, genera un nuevo código QR con la información actualizada y reemplaza el antiguo."
  },
  {
    question: "¿Qué pasa si el código QR se daña o se pierde?",
    answer: "Sí, puedes volver a ingresar a tu cuenta y volver a descargar el codigo qr asi no tenes que estar generando uno nuevo"
  },
  {
    question: "¿Puedo usar esta aplicación para varias mascotas?",
    answer: "Sí, puedes registrar múltiples mascotas en la aplicación. Cada mascota tendrá su propio código QR único con su información específica."
  },
  {
    question: "¿Qué hago si tengo problemas con la aplicación?",
    answer: "Si encuentras problemas con la aplicación, puedes contactar con nuestro equipo de soporte a través de la sección de ayuda en la aplicación o enviando un correo electrónico a tiin.-@hotmailes . Estaremos encantados de ayudarte."
  },
  {
    question: "¿Hay algún costo asociado con el uso de la aplicación?",
    answer: "La descarga y el uso básico de la aplicación son gratuitos. Sin embargo, pueden existir características premium adicionales disponibles a través de compras dentro de la aplicación. Consulta nuestra sección de precios para más detalles."
  },
  // Agrega más preguntas y respuestas aquí
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center mt-8">
          Preguntas Frecuentes
        </h2>
        <p className="text-1xl font-bold text-gray-700 mb-8 text-center mt-8">
          Algunas de las preguntas que más se repetían entre nuestros usuarios y personas nuevas en nuestra aplicación
        </p>
        <dl className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <button
                className="flex justify-between items-center w-full text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`text-gray-500 ml-2 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <dd className="mt-4 text-gray-700">
                  {faq.answer}
                </dd>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQ;
