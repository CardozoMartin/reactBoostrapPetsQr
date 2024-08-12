const API_URL = import.meta.env.VITE_API_URL;

export const postUserFn = async (data) => {
  const res = await fetch(`${API_URL}/registro`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Ocurrio un error al registrarse");
  }
  return data;
};

export const getUsersFn = async () => {
  const res = await fetch(`${API_URL}/registro`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Ocurrió un error al obtener la información de los usuarios");
  }

  const usersData = await res.json();
  return usersData;
};
