import React, { useContext } from 'react';
import { Redirect } from 'react-router';
import { NameUserContext } from '../../../Context/NameUserContext';
import { PartyRequest } from '../../../helpers/PartyRequest';

export const CreateParty = () => {

    const { PartyData, setPartyData } = useContext(NameUserContext);

    const CreateParty = async(e) => {
        e.preventDefault();

        const response = await PartyRequest('new', 'Alex', 1, 5, 30);
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
                    <select className='tc--selection'>
                        <option>Al azar</option>
                        <option>Deportes</option>
                        <option>Cine y Televisión</option>
                        <option>Tecnologia</option>
                        <option>Historia</option>
                    </select>
                </div>
                <div>
                    <h2>Cantidad de preguntas por ronda:</h2>
                    <select className='tc--selection'>
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                    </select>
                </div>
                <div>
                    <h2>Tiempo para responder(en segundos):</h2>
                    <input 
                        className='tc--input' 
                        placeholder='Especifica una cantidad en segundos'
                    />
                </div>
                <button 
                    className='tc--button' type='submit'>Buscar jugadores...</button>
            </form>
        </div>
    );
};
