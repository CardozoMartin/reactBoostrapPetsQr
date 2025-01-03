import React from 'react'
import Input from '../Components/Utils/input/Input'
import { useForm } from 'react-hook-form';
import { postRecoveryFn } from '../Components/Api/ApiRecovery';
import { useMutation } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

const RecoveryPassViews = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();

    const { mutate: postRecovery, isLoading } = useMutation({
        mutationFn: postRecoveryFn,
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
            title: 'Email enviado con éxito',
          });
          reset()
        },
        onError: (e) => {
          Swal.close();
        
          toast.error(e.message || "Error desconocido");
        },
      });

    const onSubmit = (data) => {
        if (!isLoading) {
            Swal.showLoading();
            postRecovery(data);
        }
    }

    return (
        <div className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center w-100">
                <div className="col-xl-6 col-lg-8 col-md-10">
                    <div className="card o-hidden border-0 shadow-lg">
                        <div className="card-body p-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="p-5">
                                        <div className="text-center">
                                            <h1 className="h4 text-gray-900 mb-4 fw-bold">Recupero de cuenta</h1>
                                        </div>
                                        <form className="user" onSubmit={handleSubmit(onSubmit)}>
                                            <h5 className='fs-5'>Ingresa tu correo electrónico o número de celular para buscar tu cuenta.</h5>
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
                                            <button
                                                type="submit"
                                                className="btn btn-warning btn-user btn-block text-black fw-bolder"
                                            >
                                                Recuperar contraseña
                                            </button>
                                            <hr />
                                        </form>
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

export default RecoveryPassViews;
