
import { useForm } from "react-hook-form";
import ImageUpload from "../../Utils/input/ImageUpload";
import { useSession } from "../../Store/UseSession";
import { usePet } from "../../Store/UsePet";
import { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postPetFn, putPetFn } from "../../Api/ApiPet";
import Swal from "sweetalert2";
import { toast } from "sonner";
import Input from "../../Utils/input/Input";


const FormPets = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const { user } = useSession();
  const { pet, clearPet } = usePet();
  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (pet) {
      setIsEditing(true); // Establecer isEditing a true cuando se carga una mascota existente para editar
      setValue("name", pet.name);
      setValue("tipo", pet.tipo);
      setValue("raza", pet.raza);
      setValue("content", pet.content);
      setValue("direccion", pet.direccion);
      setValue("numberphone", pet.numberphone);
      setValue("facebook", pet.facebook);
      setValue("instagram", pet.instagram);

      if (pet.image) {
        setImage(pet.image);
      }
    } else {
      setIsEditing(false); // Asegurar que isEditing sea false cuando no hay una mascota para editar
      reset();
      setImage(null);
    }
  }, [pet, reset, setValue]);

  const queryClient = useQueryClient();

  const { mutate: postPet } = useMutation({
    mutationFn: postPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota agregada con éxito");
      reset();
      queryClient.invalidateQueries("pet");
    },
    onError: (error) => {
      Swal.close();
      toast.error(error.message || "Ocurrió un error al crear la mascota");
    },
  });

  const { mutate: putPet } = useMutation({
    mutationFn: putPetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota editada con éxito");
      reset();
      queryClient.invalidateQueries("pet");
      clearPet();
    },
    onError: (error) => {
      Swal.close();
      toast.error(error.message || "Ocurrió un error al editar la mascota");
    },
  });

  const onSubmit = async (data) => {
    Swal.showLoading();

    const petData = {
      ...data,
      userID: user.id,
      image: image || pet.image, // Asegúrate de que image tenga un valor válido
    };

    if (isEditing) {
      // Si no se ha seleccionado una nueva imagen, mantener la imagen existente
      if (!image) {
        delete petData.image; // Eliminar image si es un objeto vacío ({})
      }
      const updatedPet = { ...pet, ...petData };
      putPet(updatedPet);
    } else {
      postPet(petData);
    }
  };

  const handleImageChange = (newImage) => {
    setImage(newImage);
  };

  return (
    <div className="container card o-hidden border-0 shadow-lg m-5 mb-5">
      <h1 className="text-center fw-bolder">
        {isEditing ? "Editar mascota"  : "Agregar una mascota"}
      </h1>
      <form className="row g-3 p-5" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
          <label htmlFor="name" className="form-label">Nombre</label>
          <Input
            label='Nombre'
            name='name'
            placeholder=''
            register={register}
            error={!!errors?.name}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 25,
              required: true,
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="tipo" className="form-label">Tipo</label>
          <select
            id="tipo"
            className="form-select"
            {...register("tipo")}
          >
            <option value="">Seleccione el tipo de mascota</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Conejo">Conejo</option>
            <option value="Caballo">Caballo</option>
            <option value="Hamster">Hamster</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="raza" className="form-label">Raza</label>
          <Input
            label='Ingrese la raza de su mascota'
            name='raza'
            placeholder=''
            register={register}
            error={!!errors?.raza}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 25,
              required: true,
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="content" className="form-label">Comentario</label>
          <Input
            label='Ingrese informacion adiccional de su mascota'
            name='content'
            placeholder=''
            register={register}
            error={!!errors?.content}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 2555,
              required: true,
            }}
          />
        </div>
        <div className="col-12">
          <ImageUpload onImageSelect={handleImageChange} />
        </div>
        <div className="col-md-6">
          <label htmlFor="direccion" className="form-label">Dirección</label>
          <Input
            label='Ingrese la direccion donde vive su mascota'
            name='direccion'
            placeholder=''
            register={register}
            error={!!errors?.direccion}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 255,
              required: true,
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="numberphone" className="form-label">Número de Contacto</label>
          <Input
            label='Ingrese su numero de telefono o del whatsapp'
            name='numberphone'
            placeholder=''
            register={register}
            error={!!errors?.numberphone}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 25,
              required: true,
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="facebook" className="form-label">Red Social Facebook</label>
          <Input
            label='Ingrese su facebok '
            name='facebook'
            placeholder=''
            register={register}
            error={!!errors?.facebook}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 50,
              required: true,
            }}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="instagram" className="form-label">Red Social Instagram</label>
          <Input
            label='Ingrese su instagram'
            name='instagram'
            placeholder=''
            register={register}
            error={!!errors?.instagram}
            className='mb-2'
            options={{
              minLength: 3,
              maxLength: 50,
              required: true,
            }}
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-warning w-50">
            {isEditing ? "Editar" : "Agregar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormPets;
