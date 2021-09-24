import React, { useContext, useState } from 'react';
import { NameUserContext } from '../../Context/NameUserContext';
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const Lobby = () => {
    const { PartyData } = useContext(NameUserContext);
    const { partycode, leader } = PartyData.body;

    const [Copied, setCopied] = useState(false)

    return (
        <div>
            <h2>La partida comienza en: 1m 15s</h2>
            <div className='lobby--main'>
                <div className='lobby--fcontainer'>
                    <h1>Líder de sala: {leader}</h1>
                    <h1>Tipo de preguntas: Tecnología</h1>
                    <h1>Jugadores máximos: 20</h1>
                    <h1>Tiempo respuesta: 30s</h1>
                    <h5>Invita a más amigos con el código: {partycode}</h5>
                </div>
                <div className='lobby--scontainer'>
                    <div className='lobby--fcontent'>
                        <h2 style={{marginTop: '0px'}}>Esperando más jugadores...</h2>
                        <h5 className='lobby--username'>Alex</h5>
                        <h5 className='lobby--username'>Breyner</h5>
                        <h5 className='lobby--username'>Pedro</h5>
                    </div>
                    <div className='lobby--scontent'>
                        <h1 style={{marginTop: '0px'}}>Invita a tus amigos con el código:</h1>
                        <input value={partycode} target={partycode} className='lobby--input' />
                        <CopyToClipboard
                            text={partycode}
                            onCopy={() => setCopied(true)}>
                            {!Copied ? 
                            <button className='lobby--sbutton'>Copiar código</button>
                            :
                            <button className='lobby--sbutton'>¡Código copiado!</button>}
                        </CopyToClipboard>
                    </div>
                </div>
            </div>
            <button className='lobby--button'>Iniciar partida</button>
        </div>
    );
};
