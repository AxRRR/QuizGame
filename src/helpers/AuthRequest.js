import { httpRequests } from './httpRequests';

export const AuthRequest = async(type, name, password, profileimg) => {
    const response = await httpRequests('POST', `auth/${type}`, { name, password, profileimg });
    const body = await response.json();

    return {
        body
    } 
        
};
