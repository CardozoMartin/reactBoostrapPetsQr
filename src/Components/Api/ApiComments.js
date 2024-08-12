const API_URL = import.meta.env.VITE_API_URL;



export const postCommentFn = async (data) => {
  const formData = new FormData();
  formData.append("userName", data.userName);
  formData.append("comments", data.comments);
  if (data.image) {
    formData.append("image", data.image);
  }
  formData.append("userID", data.userID);

  const res = await fetch(`${API_URL}/comments`, {
    method: "POST",
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al agregar una mascota");
  }

  return data;
};


export const getCommetFn = async () => {
  const res = await fetch(`${API_URL}/comments`);

  if (!res.ok) {
    throw new Error("Ocurrio un error al obtener las mascotas");
  }

  const data = res.json();
  return data;
};