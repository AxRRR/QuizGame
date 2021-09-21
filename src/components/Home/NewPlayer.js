import React, { Fragment, useContext, useState } from 'react';
import { NameUserContext } from '../../Context/NameUserContext';
import { httpRequests } from '../../helpers/httpRequests';
import IsEmpty from '../../helpers/IsEmpty';
import { useForm } from '../../hooks/useForm';
// import { Sports } from '../Categories/Sports';
import { Home } from './Home';

export const NewPlayer = () => {
    const { setIsEmpty, setNameuser } = useContext(NameUserContext);

    const [showComponent, setshowComponent] = useState(true)
    const [form, handlerInputChange] = useForm({
        nick: '',
        password: ''
    })

    const handlerNameUserChange = async(e) => {
        e.preventDefault();
        let response = IsEmpty(form.nick)

        if(response === false){
            return alert('Debes rellenar el campo correctamente');
        }
        else {
            // setNameuser(form.nick)
            // setIsEmpty(true)
            const name = form.nick;
            const password = form.password;

            response = await httpRequests('POST', 'auth/login', { name, password });
            const body = await response.json();

            //ESTO ES LA PETICION PARA EL LOGIN NO DEL REGISTRO
            //STATUS OK (y)
            console.log(body.status)

            if(body.status){
                console.log(body)
            } else {
                console.log(body.message)
            }
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
                            placeholder='Nombre'
                            name='nick'
                            onChange={handlerInputChange}
                            className='home--Input'
                        />
                        <input 
                            type='password'
                            placeholder='contraseña'
                            name='password'
                            onChange={handlerInputChange}
                            className='home--Input'
                        />
                        <button 
                            className='home--Button'
                            type='submit'>
                            ¡Jugar!
                        </button>
                    </form>
                </div>
            </div>}
            {showComponent === false && <Home />}
        </Fragment>
    );
};
