import React, { useState } from "react";
import Input from "../../Utils/input/Input";
import { useSession } from "../../Store/UseSession";
import { postUserFn } from "../../Api/ApiUsers";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";

const FormRegister = () => {
  const [registerOk, setRegisterOk] = useState(false);
  // ZUSTAND --------------------------------------------
  const { login } = useSession();

  // RRD ------------------------------------------------
  const navigate = useNavigate();
  const { register, handleSubmit: onSubmitRHF, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      Swal.close();
      toast.success("Registro exitoso");

      // Mostramos un mensaje más bonito con SweetAlert2
      Swal.fire({
        title: '¡Registrado con éxito!',
        text: 'Por favor revisa tu correo electrónico para activar tu cuenta y completar el registro. ¡Nos vemos pronto!',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#3085d6',
        background: '#f4f4f9', // Fondo personalizado
        customClass: {
          title: 'swal-title', // Añadimos una clase CSS para mayor personalización
          content: 'swal-content', // Personalizamos el contenido
        }
      });

      reset();
    },
    onError: (error) => {
      Swal.close();
      toast.error(error.message || "Hubo un error en el registro");
    },
  });

  const handleSubmit = (data) => {
    setIsSubmitting(true);
    postUser({ ...data, isActive: true });
  };

  return (
    <form className="user" onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="form-group row">
        {/* Otros campos aquí */}
      </div>
      <div className="form-group">
       <Input
          error={errors.name}
          label='Nombre'
          name='name'
          options={{
            required: {
              value: true,
              message: 'Este campo es requerido',
            },
            minLength: 3,
            maxLength: 30,
          }}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          label="Apellido"
          name="surname"
          placeholder="Ingrese su apellido"
          error={errors.surname}
          className="mb-2"
          options={{
            required: {
              value: true,
              message: 'Este campo es requerido',
            },
            minLength: 3,
            maxLength: 30,
          }}
          register={register}
        />
      </div>
      <div className="form-group">
        <Input
          label="Email"
          name="email"
          placeholder="Ingrese su email"
          register={register}
          error={errors?.email}
          className="mb-2"
          options={{
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "El email no es válido",
            minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
            maxLength: { value: 100, message: "Debe tener como máximo 25 caracteres" },
            required: "Este campo es obligatorio",
          }}
        />
      </div>

      <div className="form-group row">
        <div className="">
          <Input
            label="Contraseña"
            name="password"
            type="password"
            placeholder="Ingrese su contraseña"
            register={register}
            error={errors?.password}
            className="mb-2"
            options={{
              minLength: { value: 3, message: "Debe tener al menos 3 caracteres" },
              maxLength: { value: 50, message: "Debe tener como máximo 25 caracteres" },
              required: "Este campo es obligatorio",
            }}
          />
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-warning fw-bold text-black btn-user btn-block"
      >
        Registrarse
      </button>
      <p className="bolder mt-3">
        ¿Ya tienes cuenta? <Link to="/login" className="bolder">Inicia sesión</Link>
      </p>
      <hr />
    </form>
  );
};

export default FormRegister;
