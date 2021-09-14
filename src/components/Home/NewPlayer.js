import React, { Fragment, useContext, useState } from 'react';
import { NameUserContext } from '../../Context/NameUserContext';
import IsEmpty from '../../helpers/IsEmpty';
import { useForm } from '../../hooks/useForm';
// import { Sports } from '../Categories/Sports';
import { Home } from './Home';

export const NewPlayer = () => {
    const { setIsEmpty, setNameuser } = useContext(NameUserContext);

    const [showComponent, setshowComponent] = useState(true)
    const [form, handlerInputChange] = useForm({
        nick: ''
    })

    const handlerNameUserChange = (e) => {
        e.preventDefault();
        const response = IsEmpty(form.nick)

        if(response === false){
            return alert('Debes rellenar el campo correctamente');
        }
        else {
            setNameuser(form.nick)
            setIsEmpty(true)
        }
        setshowComponent(false)
    }

    return (
        <Fragment>
            {showComponent && <div>
                <h1 style={{textAlign: 'center'}}>Ingresa tu nombre para continuar</h1>
                <div className='home--Container'>
                    <form onSubmit={handlerNameUserChange}>
                        <input 
                            type='text'
                            placeholder='Ingresa un nombre para jugar'
                            name='nick'
                            onChange={handlerInputChange}
                            className='home--Input'
                            // autoComplete='disable'
                            
                            />
                        <button 
                            className='home--Button'
                            type='submit'
                            // onClick={() => }
                        >
                            ¡Jugar!
                        </button>
                    </form>
                </div>
            </div>}
            {showComponent === false && <Home />}
        </Fragment>
    );
};
