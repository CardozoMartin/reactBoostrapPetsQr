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

export const deleteUserFn = async (id) => {
  const token = sessionStorage.getItem("token");
  const res = await fetch(`${API_URL}/registro/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateUserFn = async (id, data) => {
  const token = sessionStorage.getItem("token");
  
  const res = await fetch(`${API_URL}/registro/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
