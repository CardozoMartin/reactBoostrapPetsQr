import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usePet } from "../../Store/UsePet";
import { deletePetFn } from "../../Api/ApiPet";
import Swal from "sweetalert2";
import { toast } from "sonner";
import QRCodeGenerator from "../QR/QRCodeGenerator";
import "../../css/card.css"

const Card = (props) => {
  const { pet } = props;
  const { setPetToEdit } = usePet();
  const queryClient = useQueryClient();

  // Función para eliminar una mascota
  const { mutate: deletePet } = useMutation({
    mutationFn: deletePetFn,
    onSuccess: () => {
      Swal.close();
      toast.success("Mascota eliminada con éxito");
      queryClient.invalidateQueries("pet");
    },
    onError: (e) => {
      Swal.close();
      toast.error(e.message);
    },
  });

  const handleDelete = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: `Estás a punto de eliminar la mascota "${pet.name}"`,
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        Swal.showLoading();
        deletePet(pet.id);
      }
    });
  };

  const handleEdit = () => {
    setPetToEdit(pet);
  };

  return (
    <div className="card text-center border-0 shadow-sm mb-4 ">
      <div>
        <div className="card o-hidden border-0 shadow-lg my-5 " >
          <div className="rounded-circle  justify-content-centers">
            <img className="rounded-circle w-50 justify-content-centers" alt={pet.name}
            src={pet.image} />
          </div>
          
          <div className="card-body">
            <h4 className="card-title">Nombre : {pet.name}</h4>
            
            <p className="card-text">
              <strong>Raza:</strong> {pet.raza}<br />
              <strong>Tipo:</strong> {pet.tipo}<br />
              <strong>Dirección:</strong> {pet.direccion}<br />
              <strong>Numero de contacto:</strong> {pet.numberphone}<br />
              <strong>Información Adicional:</strong> {pet.content}
            </p>
            <button
              className="btn btn-danger me-2"
              onClick={handleDelete}
            >
              Eliminar
            </button>
            <button
              className="btn btn-warning"
              onClick={handleEdit}
            >
              Editar
            </button>
            <QRCodeGenerator petId={pet.id} />
            
          </div>
        </div>
      </div>


    </div>
  );
};

export default Card;
