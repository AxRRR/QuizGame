import { httpRequests } from './httpRequests';

export const AuthRequest = async(type, name, password) => {
    const response = await httpRequests('POST', `auth/${type}`, { name, password });
    const body = await response.json();

    return {
        body
    } 
        
};
