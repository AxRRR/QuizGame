import { httpRequests } from './httpRequests';

export const PartyRequest = async(
        type,
        leader, 
        typeQuestions, 
        players, 
        timeQuestions,
        name,
        id,
        profileimg,
        dataUser
    ) => {
    const response = await httpRequests('POST', `party/${type}`, { 
        leader, 
        typeQuestions, 
        players, 
        timeQuestions,
        name,
        id,
        profileimg,
        dataUser
    });
    const body = await response.json();

    return {
        body
    } 
        
};