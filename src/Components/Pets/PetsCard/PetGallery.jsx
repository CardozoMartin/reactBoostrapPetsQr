import { useQuery } from "@tanstack/react-query";
import { getPetFn } from "../../Api/ApiPet";
import PetCard from "./PetCard";
import PetCardSkeleton from "./PetCardSkeleton";
import ErrorAlert from "./ErrorAlert";


const PetGallery = () => {
  const {
    data: pet,
    isError,
    isLoading,
  } = useQuery({ queryKey: ["pet"], queryFn: getPetFn });

  if (isError) {
    return <ErrorAlert />;
  }
  
  return (
    <>
      {isLoading ? (
        <div className="text-center mt-3 d-flex m-5">
          
          <PetCardSkeleton />
          
        </div>
      ) : (
        <>
          <h1 className="text-center font-weight-bold my-4">Mis Mascotas</h1>
          <PetCard pet={pet} />
        </>
      )}
    </>
  );
};

export default PetGallery;
