import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSession } from "../Store/UseSession";
import Swal from "sweetalert2";
import { toast } from "sonner";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useSession();
  const navigate = useNavigate();

  // Estado para controlar si el navbar está abierto o cerrado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    Swal.fire({
      title: "Atención",
      text: "¡Estás por salir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesión cerrada con éxito");
        logout();
        navigate("/");
      }
    });
  };

  // Función para manejar el cierre del menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsMenuOpen(false);  // Cambia el estado para cerrar el menú
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg position-fixed">
        <div className="container">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "nav-link active fw-bolder text-warning fs-5"
                : "nav-link text-white navbar-brand text-white fs-5"
            }
          >
            <i className="bi bi-qr-code-scan ms-2"></i> PetsQr
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded={isMenuOpen ? "true" : "false"} // Usa el estado para el toggle
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)} // Cambia el estado cuando se hace clic
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-2 mb-2 mb-lg-0">
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active fw-bolder text-warning"
                        : "nav-link text-white"
                    }
                    to="/register"
                    onClick={closeMenu} // Cierra el menú cuando se hace clic
                  >
                    Registro
                  </NavLink>
                </li>
              )}
              {!isLoggedIn && (
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "nav-link active fw-bolder text-warning"
                        : "nav-link text-white"
                    }
                    to="/login"
                    onClick={closeMenu} // Cierra el menú cuando se hace clic
                  >
                    Inicio
                  </NavLink>
                </li>
              )}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active fw-bolder text-warning"
                      : "nav-link text-white"
                  }
                  to="/help"
                  onClick={closeMenu} // Cierra el menú cuando se hace clic
                >
                  Ayuda
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link active fw-bolder text-warning"
                      : "nav-link text-white"
                  }
                  to="/contacto"
                  onClick={closeMenu} // Cierra el menú cuando se hace clic
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
            {!isLoggedIn ? (
              <Link to="/login" className="btn btn-inicio" onClick={closeMenu}>
                Ingresar
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="btn btn-danger text-end d-flex justify-content-end ms-2"
              >
                Salir
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
