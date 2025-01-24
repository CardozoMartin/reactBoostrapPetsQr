import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsQrCode } from "react-icons/bs";
import { MdHome, MdHelp, MdContactMail } from "react-icons/md";
import { useSession } from "../Store/UseSession"; // Asegúrate de tener esta ruta correcta
import Swal from "sweetalert2";
import { toast } from "sonner";

const Navbar = () => {
  const { isLoggedIn, logout, user } = useSession();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getDynamicTextColor = () => isScrolled ? "text-[#4A4A4A]" : "text-white";

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

  return (
    <nav
      className={`fixed w-full z-50 top-0 left-0 shadow-lg transition-colors duration-300 ${
        isScrolled ? "bg-transparent" : "bg-orange-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link
              to="/"
              className={`flex items-center space-x-2 ${getDynamicTextColor()}`}
            >
              <BsQrCode className="h-7 w-7" />
              <span className="text-xl font-bold">PetsQr</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) => `transition-colors duration-200 ${
                isScrolled
                  ? `${isActive ? "text-[#2E2E2E]" : "text-[#4A4A4A]"} hover:text-[#2E2E2E]`
                  : `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }`}
            >
              Inicio
            </NavLink>
            
            <NavLink
              to="/ayuda"
              className={({ isActive }) => `transition-colors duration-200 ${
                isScrolled
                  ? `${isActive ? "text-[#2E2E2E]" : "text-[#4A4A4A]"} hover:text-[#2E2E2E]`
                  : `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }`}
            >
              Ayuda
            </NavLink>
            
            <NavLink
              to="/contacto"
              className={({ isActive }) => `transition-colors duration-200 ${
                isScrolled
                  ? `${isActive ? "text-[#2E2E2E]" : "text-[#4A4A4A]"} hover:text-[#2E2E2E]`
                  : `${isActive ? "text-yellow-400" : "text-white"} hover:text-yellow-400`
              }`}
            >
              Contacto
            </NavLink>

            {!isLoggedIn ? (
              <Link
                to="/ingresar"
                className={`transition-colors duration-200 ${
                  isScrolled
                    ? "bg-[#4A4A4A] text-white hover:bg-[#2E2E2E]"
                    : "bg-white text-purple-900 hover:bg-yellow-400"
                } px-4 py-2 rounded-md font-medium`}
              >
                Acceder
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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleSidebar}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${
                isScrolled
                  ? "text-[#4A4A4A] hover:text-[#2E2E2E]"
                  : "text-white hover:text-yellow-400"
              }`}
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-orange-600 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40`}
      >
        <div className="flex items-center justify-between px-4 py-4 bg-orange-800 shadow-md">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-yellow-400 focus:outline-none"
          >
            <FaTimes className="h-6 w-6" />
          </button>
          <span className="text-white text-lg font-bold">PetsQr</span>
        </div>

        <div className="px-4 py-6 space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) => `flex items-center space-x-3 font-bold px-3 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-green-700 text-white"
                : "text-white hover:bg-yellow-400 hover:text-purple-900"
            }`}
            onClick={toggleSidebar}
          >
            <MdHome className="h-6 w-6" />
            <span>Inicio</span>
          </NavLink>
          
          <NavLink
            to="/ayuda"
            className={({ isActive }) => `flex items-center space-x-3 font-bold px-3 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-yellow-400 text-white"
                : "text-white hover:bg-yellow-400 hover:text-purple-900"
            }`}
            onClick={toggleSidebar}
          >
            <MdHelp className="h-6 w-6" />
            <span>Ayuda</span>
          </NavLink>
          
          <NavLink
            to="/contacto"
            className={({ isActive }) => `flex items-center space-x-3 font-bold px-3 py-2 rounded-md transition-colors duration-200 ${
              isActive
                ? "bg-yellow-400 text-white"
                : "text-white hover:bg-yellow-400 hover:text-purple-900"
            }`}
            onClick={toggleSidebar}
          >
            <MdContactMail className="h-6 w-6" />
            <span>Contacto</span>
          </NavLink>

          <hr className="border-t border-yellow-400 my-6" />

          {!isLoggedIn ? (
            <Link
              to="/ingresar"
              className="block font-bold bg-white text-orange-900 px-4 py-2 rounded-md font-medium hover:bg-yellow-400 transition-colors duration-200 text-center"
              onClick={toggleSidebar}
            >
              Acceder
            </Link>
          ) : (
            <button
              onClick={() => {
                toggleSidebar();
                handleLogout();
              }}
              className="w-full font-bold bg-red-600 text-white px-4 py-2 rounded-md font-medium hover:bg-red-700 transition-colors duration-200 text-center"
            >
              Salir
            </button>
          )}
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
        ></div>
      )}
    </nav>
  );
};

export default Navbar;