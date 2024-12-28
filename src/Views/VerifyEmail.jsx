import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VerifyEmail = () => {
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');

    // Llamada al backend para verificar el correo
    fetch(`/verify-email?token=${token}`)
      .then(response => response.json())
      .then(data => {
        // Mostrar mensaje de éxito o error
        alert(data.message);
      })
      .catch(error => {
        console.error('Error al verificar correo', error);
        alert('Hubo un error al verificar tu correo');
      });
  }, [location]);

  return <div>Verificando tu correo...</div>;
};

export default VerifyEmail;
