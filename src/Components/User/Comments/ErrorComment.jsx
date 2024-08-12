import React from 'react';

import "../../css/error.css"

const ErrorAlert = () => (
    <div className="error-alert alert alert-warning text-center mt-5 mb-5 container">
    <i className="bi bi-exclamation-triangle" style={{ fontSize: '50px', color: 'red' }}></i>
    <h4 className="mt-3">¡Vaya, ocurrió un problema!</h4>
    <p>No pudimos cargar la información de los comentarios en este momento. Por favor, intenta de nuevo más tarde.</p>
    <button className="btn btn-danger mt-3" onClick={() => window.location.reload()}>
      Intentar de nuevo
    </button>
  </div>
);

export default ErrorAlert;
