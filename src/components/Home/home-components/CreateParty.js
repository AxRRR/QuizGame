import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { NameUserContext } from '../../../Context/NameUserContext';
import { PartyRequest } from '../../../helpers/PartyRequest';
import { useForm } from '../../../hooks/useForm';

export const CreateParty = () => {

    const { PartyData, setPartyData } = useContext(NameUserContext);
    
    const [PartyForm, handlerInputChange] = useForm({
        leader: '',
        typeQuestions: '',
        players: '',
        timeQuestions: ''
    });


    const CreateParty = async(e) => {
        e.preventDefault();

        // console.log(PartyForm.leader, 
        //     PartyForm.typeQuestions, 
        //     PartyForm.players, 
        //     PartyForm.timeQuestions)

        const response = await PartyRequest('new', 
            'Alex', 
            PartyForm.typeQuestions, 
            PartyForm.players, 
            PartyForm.timeQuestions);
        setPartyData(response);
    }

    if(PartyData.body.status){
        return <Redirect to={`/lobby/party-${PartyData.body.partycode}`} />
    }

    return (
        <div className='tc--fcontainer'>
            <form onSubmit={CreateParty}>
                <div>
                    <h2>Tipo de preguntas:</h2>
                    <select 
                        name='typeQuestions'
                        className='tc--selection'
                        onChange={handlerInputChange}>
                        <option value={1}>Al azar</option>
                        <option value={2}>Deportes</option>
                        <option value={3}>Cine y Televisión</option>
                        <option value={4}>Tecnologia</option>
                        <option value={5}>Historia</option>
                    </select>
                </div>
                <div>
                    <h2>Cantidad de preguntas por ronda:</h2>
                    <select 
                        name='players'
                        className='tc--selection'
                        onChange={handlerInputChange}>
                        <option value={5}>5</option>
                        <option value={10}>10</option>
                        <option value={15}>15</option>
                        <option value={20}>20</option>
                    </select>
                </div>
                <div>
                    <h2>Tiempo para responder(en segundos):</h2>
                    <input 
                        className='tc--input' 
                        placeholder='Especifica una cantidad en segundos'
                        name='timeQuestions'
                        onChange={handlerInputChange}
                    />
                </div>
                <button 
                    className='tc--button' type='submit'>Buscar jugadores...</button>
            </form>
        </div>
    );
};
