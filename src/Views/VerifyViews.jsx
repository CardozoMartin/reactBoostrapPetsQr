import React from 'react'
import { Link } from 'react-router-dom'

const VerifyViews = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>¡Cuenta Activada!</h1>
      <p>Tu cuenta ha sido verificada exitosamente. Ahora puedes iniciar sesión.</p>
      <Link to="/login">
        <button style={{ padding: "10px 20px", fontSize: "16px" }}>
          Ir al Login
        </button>
      </Link>
    </div>

  )
}

export default VerifyViews