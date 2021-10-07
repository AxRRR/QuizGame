import React, { useContext } from 'react';
import { io } from 'socket.io-client';
import { NameUserContext } from '../../../Context/NameUserContext';
import { UpdateParty } from '../../../helpers/UpdateParty';
import { useForm } from '../../../hooks/useForm';

export const Join = () => {
    const socket = io('http://localhost:4000', {
        transports: ["websocket", "polling"]
    });

    socket.on('userlist', (arg) => {
        console.log(arg);
    });

    // const socket = io("http://localhost:4000", {
    // withCredentials: true,
    //  extraHeaders: {
    //   "my-custom-header": "abcd"
    // }
    // });

    const { PartyData, setPartyData, dataUser } = useContext(NameUserContext);

    const [PartyForm, handlerInputChange] = useForm({
        partycode: ''
    });

    const JoinHandler = async(e) => {
        e.preventDefault();
        const { partycode } = PartyForm;
        const response = await UpdateParty('join', 
            partycode,
            dataUser
        );
        setPartyData(response.body);

        console.log(response)
        // console.log(PartyForm.partycode)
        socket.emit('join', partycode);
    }


    return (
        <div className='join--main'>
            <div className='join--fcontainer'>
                <h5>Únete a una partida con amigos, ingresa el código de invitación: </h5>
            </div>
            <div className='join--scontainer'>
                <form onSubmit={JoinHandler}>
                    <input 
                        className='join--input' 
                        placeholder='H4SD-DS66-EDSA-4402'
                        name='partycode'
                        onChange={handlerInputChange}
                    />
                    <button 
                        className='join--button'
                        type='submit'>Unirme</button>
                </form>
            </div>
        </div>
    );
};
