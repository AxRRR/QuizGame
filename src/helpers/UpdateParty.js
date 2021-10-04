import { httpRequests } from './httpRequests';

export const UpdateParty = async(
        type,
        partycode,
        dataUser
    ) => {
    const response = await httpRequests('PUT', `party/${type}`, { 
        partycode,
        id: dataUser.body.id,
        name: dataUser.body.name, 
    });
    console.log(dataUser.body.id, dataUser.body.name)

    const body = await response.json();

    console.log(body)
    return {
        body
    } 
        
};