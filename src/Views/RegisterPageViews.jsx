import React from "react";
import "../Components/css/sb-admin-2.css";
import imgRegister from "../img/Register/registerimg.svg";
import FormRegister from "../Components/User/FormRegister/FormRegister";
const RegisterPageViews = () => {
  return (
    <div className="container pt-5">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-5 d-none d-lg-block bg-register-image ">
              <img src={imgRegister} alt="imagen de registro" className="" />
            </div>
            <div className="col-lg-7">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4 fw-bold">Registro</h1>
                </div>
                <FormRegister></FormRegister>
               
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPageViews;
