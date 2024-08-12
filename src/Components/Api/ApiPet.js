const API_URL = import.meta.env.VITE_API_URL;

export const postPetFn = async (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("tipo", data.tipo);
  formData.append("raza", data.raza);
  formData.append("direccion", data.direccion);
  formData.append("numberphone", data.numberphone);
  formData.append("facebook", data.facebook);
  formData.append("instagram", data.instagram);
  formData.append("content", data.content);
  formData.append("image", data.image);
  formData.append("userID", data.userID);

  const res = await fetch(`${API_URL}/pet`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al agregar una mascota");
  }

  return data;
};

export const getPetFn = async () => {
  const res = await fetch(`${API_URL}/pet`);

  if (!res.ok) {
    throw new Error("Ocurrio un error al obtener las mascotas");
  }

  const data = res.json();
  return data;
};
export const getPetByIdFn = async (petid) => {
  const res = await fetch(`${API_URL}/pet/${petid}`);

  if (!res.ok) {
    throw new Error("Ocurrió un error al obtener las mascotas");
  }

  const data = await res.json(); // Espera a que se resuelva la promesa
  return data;
};


export const deletePetFn = async (petId) => {
  const token = sessionStorage.getItem("token");

  const res = await fetch(`${API_URL}/pet/${petId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(
      resData.message || "ocurrio un error al eliminar la mascota"
    );
  }
};

export const putPetFn = async (petData) => {
  const token = sessionStorage.getItem("token");

  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(petData), // Convertir petData a JSON
  };

  const res = await fetch(`${API_URL}/pet/${petData.id}`, requestOptions);

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(resData.message || "Ocurrió un error al editar la mascota");
  }

  return resData;
};

