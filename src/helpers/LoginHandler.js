import Swal from "sweetalert2";
import { AuthRequest } from "./AuthRequest";

export const RequestLoginUser = async(name, password) => {
    
    const { body } = await AuthRequest('login', name, password);

    if(body.status){
        return body;
    } else {
        return Swal.fire({
            icon: 'error',
            title: 'Error: Credenciales no válidas',
            text: 'El usuario o contraseña no existen.',
            confirmButtonText: 'Aceptar'
        })
    }
}

export const RequestGoogleLogin = async( GoogleCredentials ) => {

    if(GoogleCredentials.profileObj !== undefined){
        const DataUser = await AuthRequest('logingoogle', 
            GoogleCredentials.profileObj.name, 
            GoogleCredentials.profileObj.googleId,
            GoogleCredentials.profileObj.imageUrl);
        return DataUser;
            
    } else {
        return Swal.fire({
            icon: 'error',
            title: 'Error: Ocurrió un error',
            text: 'Ocurrió un error al autenticarte. Prueba nuevamente.',
            confirmButtonText: 'Aceptar'
        })
    }
    
}