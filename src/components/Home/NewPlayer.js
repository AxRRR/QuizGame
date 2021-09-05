import React, { Fragment } from 'react';
import { useForm } from '../../hooks/useForm';

export const NewPlayer = () => {
    const [form, handlerInputChange] = useForm({
        nick: ''
    })

    console.log(form.nick)

    return (
        <Fragment>
            <h1 style={{textAlign: 'center'}}>Ingresa tu nombre para continuar</h1>
            <div className='home--Container'>
                <input 
                    type='text'
                    placeholder='Ingresa un nombre para jugar'
                    name='nick'
                    onChange={handlerInputChange}
                    className='home--Input'
                    // autoComplete='disable'
                    
                    />
                <button className='home--Button'>
                    ¡Jugar!
                </button>
            </div>
        </Fragment>
    );
};
