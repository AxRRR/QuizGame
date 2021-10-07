import { httpRequests } from './httpRequests';

export const UpdateParty = async(
        type,
        partycode,
        dataUser
    ) => {
    const response = await httpRequests('PUT', `party/${type}`, { 
        partycode,
        id: dataUser.id,
        name: dataUser.name, 
    });
    console.log(dataUser.id, dataUser.name)

    const body = await response.json();

    console.log(body)
    return {
        body
    } 
        
};