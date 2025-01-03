import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSession } from '../../../Store/UseSession';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { toast } from 'sonner';
import TextAreaInput from '../../../Utils/input/TextAreaInput';
import ImageUpload from '../../../Utils/input/ImageUpload';
import { postCommentFn } from '../../../Api/ApiComments';
import imgQR from "../../../../img/Comments/imagQR.png"

const FormCommets = () => {
    const { user } = useSession();

    const { register, handleSubmit, reset, formState: { errors }, setError } = useForm();
    const [image, setImage] = useState(null);
    const [imageError, setImageError] = useState('');

    const queryClient = useQueryClient();

    const { mutate: postComment } = useMutation({
        mutationFn: postCommentFn,
        onSuccess: () => {
            Swal.close();
            toast.success('Gracias por compartir tu opinión  ♥');
            reset();
            setImage(null);
            setImageError('');
            queryClient.invalidateQueries('comments');
        },
        onError: (error) => {
            Swal.close();
            toast.error(error.message || 'Hubo un error en el registro');
        },
    });

    const onSubmit = (data) => {
        // Ya no es necesario validar si hay una imagen
        Swal.showLoading();
        const commentData = {
            ...data,
            userID: user.id,
            name: user.name,
            surname: user.surname,
            image: image || null, // Si no hay imagen, se envía null
        };
        console.log(commentData);
        postComment(commentData);
    };
    

    const handleImageChange = (newImage) => {
        setImage(newImage);
        setImageError(''); // Clear the error when an image is selected
    };

    return (
        <section className="card o-hidden border-0 shadow-lg my-5">
            <div className="container my-5">
                <div className="row">
                    <div className="col-lg-5 mb-4">
                        <div className="text-center d-none d-md-block"> {/* Oculta la imagen en pantallas pequeñas */}
                            <img src={imgQR} alt="qr" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="bg-white p-4 rounded shadow-sm">
                            <h1 className="text-center fw-bold mb-4">Deja tu comentario</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="comments">Comentario</label>
                                    <TextAreaInput
                                        register={register}
                                        id="comments"
                                        name="comments"
                                        error={errors.comments}
                                        errorMessage={errors.comments?.message}
                                        className="form-control"
                                        options={{
                                            required: 'El comentario es obligatorio',
                                            minLength: { value: 4, message: 'El comentario debe tener al menos 4 caracteres' },
                                            maxLength: { value: 6000, message: 'El comentario no puede exceder los 6000 caracteres' },
                                        }}
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="" className="mt-5">Sube una foto de tu mascota; si ya lleva puesto el collar con el código, mucho mejor!</label>
                                    <ImageUpload onImageSelect={handleImageChange} />
                                    {imageError && (
                                        <div className="invalid-feedback d-block">
                                            {imageError}
                                        </div>
                                    )}
                                </div>
                                <div className="text-center mt-2">
                                    <button
                                        type="submit"
                                        className="btn btn-warning text-white "
                                    >
                                        Enviar Comentario
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FormCommets;
