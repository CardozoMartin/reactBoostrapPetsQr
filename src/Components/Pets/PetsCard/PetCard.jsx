
import { useSession } from "../../Store/UseSession";
import Card from "./Card";
import EmblaCarousel from "./Carrusel/EmblaCarousel";

const PetCard = (props) => {
  const { pet } = props;
  const { user } = useSession();
  const userId = user?.id;

  // Filtrar las mascotas del usuario
  const filterPetId = pet && pet.data ? pet.data.filter((item) => item.userID === userId) : [];

  // Verificar si no hay mascotas para mostrar
  if (filterPetId.length === 0) {
    return (
      <div className="container mt-4 aler alert-primary text-center">
        <i className="bi bi-exclamation-triangle" style={{ fontSize: '50px', color: 'red' }}></i>
        <p className="text-center">Todavía no cargaste ninguna mascota</p>
      </div>
    );
  }

  // Mostrar las mascotas filtradas en el carrusel
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Pasa el array de mascotas al carrusel */}
        <EmblaCarousel pet={filterPetId} options={{ loop: true, speed: 5 }} />
      </div>
    </div>
  );
};


export default PetCard;
