
import { useSession } from "../../Store/UseSession";
import Card from "./Card";

const PetCard = (props) => {
  const { pet } = props;
  const { user } = useSession();
  const userId = user?.id;

  // Filtrar las mascotas del usuario
  const filterPetId = pet && pet.data ? pet.data.filter((item) => item.userID === userId) : [];

  // Verificar si no hay mascotas para mostrar
  if (filterPetId.length === 0) {
    return (
      <div className="container mt-4 aler alert-primary text-centern">
        <i className="bi bi-exclamation-triangle" style={{ fontSize: '50px', color: 'red' }}></i>
        <p className="text-center">Todavia no cargaste ninguna mascota</p>
      </div>
    );
  }

  // Mostrar las mascotas filtradas
  return (
    <div className="container mt-4">
      <div className="row">
        {filterPetId.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">
            <Card pet={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetCard;
