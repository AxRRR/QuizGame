import React, { Fragment, useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { NameUserContext } from '../../Context/NameUserContext';
import { AuthRequest } from '../../helpers/AuthRequest';
import IsEmpty from '../../helpers/IsEmpty';
import { useForm } from '../../hooks/useForm';
// import { Sports } from '../Categories/Sports';
import { Home } from './Home';

export const Register = ({ hideAuth }) => {
    const { setDataUser, setIsLogin } = useContext(NameUserContext);

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
            const { body } = await AuthRequest('register', form.nick, form.password);
            if(body.status){
                // ACÄ PONDREMOS UN CARGADOR...
                setDataUser({
                    name: body.name
                });
            } else {
                return Swal.fire({
                    icon: 'error',
                    title: 'Error: Ocurrió un error',
                    text: 'El nombre de usuario que elegiste ya está registrado en nuestra base de datos.',
                    confirmButtonText: 'Aceptar'
                })
            }
            console.log(body)
        }
        setshowComponent(false)
    }

    return (
        <Fragment>
            {showComponent && <div>
                <h1 style={{textAlign: 'center'}}>Ingresa tus datos para registrate</h1>
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
