import React from "react";

import { useSession } from "../../Store/UseSession";
import { postLoginFn } from "../../Api/ApiAuth";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";
import Input from "../../Utils/input/Input";

const FormLogin = () => {
  const { login } = useSession();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, } = useForm();

  const { mutate: postLogin, isLoading } = useMutation({
    mutationFn: postLoginFn,
    onSuccess: (data) => {
      Swal.close();
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
      });
      login(data);
      navigate("/");
    },
    onError: (e) => {
      Swal.close();
    
      toast.error(e.message || "Error desconocido");
    },
  });

  const onSubmit = (data) => {
    if (!isLoading) {
      Swal.showLoading();
      postLogin(data);
    }
  };
  return (
    <form className="user"  onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
      <Input
        label='Nombre de usuario'
        name='email'
        placeholder='Ingrese su email'
        register={register}
        error={!!errors?.email}
        className='mb-2 '
        options={{
          minLength: 3,
          maxLength: 25,
          required: true,
        }}
      />
        
      </div>
      <div className="form-group">
      <Input
        label='Contraseña'
        type='password'
        name='password'
        placeholder=''
        register={register}
        error={!!errors?.password}
        className='mb-2'
        options={{
          minLength: 3,
          maxLength: 25,
          required: true,
        }}
      />
      </div>

      <button
        type="submit"
        className="btn btn-warning btn-user btn-block text-black fw-bolder"
      >
        Login
      </button>
      <hr />
    </form>
  );
};

export default FormLogin;
