import React from 'react'
import "../Components/css/sb-admin-2.css";
import imgLogin from "../img/Login/Loginimg.svg";
import FormLogin from '../Components/User/FormLogin/FormLogin';
import { Link } from 'react-router-dom';
const LoginPageViews = () => {
  return (
    <div className="container pt-5 ">
    <div className="row justify-content-center">
      <div className="col-xl-10 col-lg-12 col-md-9">
        <div className="card o-hidden border-0 shadow-lg my-5">
          <div className="card-body p-0">
            <div className="row">
              <div className="col-lg-6 d-none d-lg-block bg-login-image">
                <img src={imgLogin} alt="imagen register" className="img" />
              </div>
              <div className="col-lg-6">
                <div className="p-5">
                  <div className="text-center">
                    <h1 className="h4 text-gray-900 mb-4 fw-bold">Bienvenido !</h1>
                  </div>
                 <FormLogin></FormLogin>
                 
                  
                 <p className=' bolder '>no tenes cuenta? <Link to={"/register"} className='fs-5 bolder'>Registrate</Link></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginPageViews