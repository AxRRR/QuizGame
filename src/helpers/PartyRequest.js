import { httpRequests } from './httpRequests';

export const PartyRequest = async(
        type,
        leader, 
        typeQuestions, 
        players, 
        timeQuestions
    ) => {
    const response = await httpRequests('POST', `party/${type}`, { 
        leader, 
        typeQuestions, 
        players, 
        timeQuestions 
    });
    const body = await response.json();

    return {
        body
    } 
        
};