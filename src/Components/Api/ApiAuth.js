import { jwtDecode } from "jwt-decode";
const API_URL = import.meta.env.VITE_API_URL;

export const postLoginFn = async(formData)=>{
const res = await fetch(`${API_URL}/auth/login`,{
    method:"POST",
    body: JSON.stringify(formData),
    headers:{
        "content-type":"application/json",
    },
});

const data = await res.json();

if(!res.ok){
    const message = data.message;
    throw new Error(message || "Ocurrio un error al iniciar session")
};

const token = data.data;

sessionStorage.setItem("token",token);

const userData = jwtDecode(token).user;

return userData;
}