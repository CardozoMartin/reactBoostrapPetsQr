
const API_URL = import.meta.env.VITE_API_URL;
export const postRecoveryFn = async (data) => {
    const res = await fetch(`${API_URL}/registro/recovery`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error("Ocurrio un error al enviar el email");
    }
    return data;
};