import React, { useContext } from 'react';
import { NameUserContext } from '../../Context/NameUserContext';

export const Lobby = () => {
    const { PartyData } = useContext(NameUserContext);
    const { partycode, leader } = PartyData.body;

    return (
        <div>
            <h2>La partida comienza en: 1m 15s</h2>
            <div className='lobby--main'>
                <div className='lobby--fcontainer'>
                    <h2>Esperando por más jugadores...</h2>
                    <h1>Líder de sala: {leader}</h1>
                    <h1>Tipo de preguntas: Tecnología</h1>
                    <h1>Jugadores máximos: 20</h1>
                    <h1>Tiempo respuesta: 30s</h1>
                    <h5>Invita a más amigos con el código: {partycode}</h5>
                </div>
                <div className='lobby--scontainer'>
                    <div className='lobby--fcontent'>
                        <h1>Jugadores en espera:</h1>
                        <h5>Alex</h5>
                        <h5>Breyner</h5>
                        <h5>Pedro</h5>
                    </div>
                    <div className='lobby--scontent'>
                        <h1>Invita a tus amigos con el código:</h1>
                        <input className='lobby--input' />
                    </div>
                </div>
            </div>
            <button className='lobby--button'>Iniciar partida</button>
        </div>
    );
};
