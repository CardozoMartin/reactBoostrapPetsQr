import React, { useState } from "react";
import Input from "../../Utils/input/Input";
import { useSession } from "../../Store/UseSession";
import { postUserFn } from "../../Api/ApiUsers";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import Swal from "sweetalert2";

const FormRegister = () => {
  // ZUSTAND --------------------------------------------
  const { login } = useSession();

  // RRD ------------------------------------------------
  const navigate = useNavigate();
  const { register, handleSubmit: onSubmitRHF, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { mutate: postUser } = useMutation({
    mutationFn: postUserFn,
    onSuccess: (data) => {
      Swal.close();
      toast.success("Registro exitoso");

      login({ ...data, password: undefined });

      navigate("/");
    },
    onError: (error) => {
      Swal.close();
      if (error == true) {

        toast.error(error.message || "Hubo un error en el registro");
      } else {
        toast.error(error.message);
      }
    },
  });

  const handleSubmit = (data) => {

    setIsSubmitting(true);
    postUser({ ...data, isActive: true });
  };

  return (
    <form className="user" onSubmit={onSubmitRHF(handleSubmit)}>
      <div className="form-group row">
        
        
      </div>
      <div className="form-group">
        <Input
          label="Email"
          name="email"
          placeholder="Ingrese su email"
          register={register}
          error={!!errors?.email}
          className="mb-2"
          options={{
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
            error={!!errors?.password}
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
      <hr />
    </form>
  );
};

export default FormRegister;
