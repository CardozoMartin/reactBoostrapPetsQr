import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSession } from "../Store/UseSession";
import Swal from "sweetalert2";
import { toast } from "sonner";


const Navbar = () => {
  const { isLoggedIn, logout, user } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Atencion",
      text: "Estas por salir !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, salir",
      cancelButtonText: "Cancel",
    }).then((res) => {
      if (res.isConfirmed) {
        toast.success("Sesión cerrada con éxito");
        logout();
        navigate("/");
      }
    });
  };

  return (
    <header className="">
      <nav className="navbar navbar-expand-lg position-fixed">
        <div className="container">
          <NavLink to="/" className={({ isActive }) =>
            isActive
              ? 'nav-link active fw-bolder text-warning fs-5'
              : 'nav-link text-white navbar-brand text-white fs-5'
          }>
            <i className="bi bi-qr-code-scan"></i> PetsQr
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {!isLoggedIn &&
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? 'nav-link active fw-bolder text-warning'
                        : 'nav-link text-white'
                    }
                    to="/register"
                    aria-current="page"
                  >
                    Registro
                  </NavLink>
                </li>
              }
              {!isLoggedIn &&
                <li className="nav-item">
                  <NavLink
                    className={({ isActive }) => isActive ? 'nav-link active fw-bolder text-warning'
                      : 'nav-link text-white'}
                    to="/login"
                  >
                    Inicio
                  </NavLink>
                </li>}
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) => isActive ? 'nav-link active fw-bolder text-warning'
                    : 'nav-link text-white'}
                  to="/help"
                >
                  Ayuda
                </NavLink>
              </li>
              <li className="nav-item d-none d-md-block mb-lg-0 d-sm-none d-flex d-flex justify-content-end">

              </li>
            </ul>
            {!isLoggedIn ? (
              <Link to="/login" className="btn btn-warning ms-3">
                Ingresar
              </Link>
            ) : (
              <button onClick={handleLogout} className="btn btn-danger text-end d-flex justify-content-end ">
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
