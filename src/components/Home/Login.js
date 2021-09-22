import React, { Fragment, useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { NameUserContext } from '../../Context/NameUserContext';
import { AuthRequest } from '../../helpers/AuthRequest';
import IsEmpty from '../../helpers/IsEmpty';
import { useForm } from '../../hooks/useForm';
import { LoadingPage } from '../others/LoadingPage';
// import { Sports } from '../Categories/Sports';
import { Home } from './Home';

export const Login = ({hideAuth}) => {
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
            return Swal.fire({
                icon: 'error',
                title: 'Error: Campos inválidos',
                text: 'Debes de rellenar los campos (min: 3 caracteres)',
                confirmButtonText: 'Aceptar'
            })
        }
        else {
            
            const { body } = await AuthRequest('login', form.nick, form.password);
            if(body.status){
                LoadingPage(true);
                    setTimeout(() => {
                    // ACÄ PONDREMOS UN CARGADOR...
                    setNameuser(body.name);
                    setIsEmpty(true);
                    LoadingPage(false);
                    setshowComponent(false);
                }, 4000);
                } else {
                    return Swal.fire({
                        icon: 'error',
                        title: 'Error: Credenciales no válidas',
                        text: 'El usuario o contraseña no existen.',
                        confirmButtonText: 'Aceptar'
                    })
                }
                console.log(body)
        }
    }

    const responseGoogle = async(GoogleCredentials ) => {
        console.log(GoogleCredentials)
        if(GoogleCredentials.profileObj !== undefined){
            await AuthRequest('logingoogle', 
                GoogleCredentials.profileObj.name, 
                GoogleCredentials.profileObj.googleId,
                GoogleCredentials.profileObj.imageUrl);
                LoadingPage(true);
                    setTimeout(() => {
                    // ACÄ PONDREMOS UN CARGADOR...
                    setNameuser(GoogleCredentials.profileObj.name);
                    setIsEmpty(true);
                    LoadingPage(false);
                    setshowComponent(false);
                }, 4000);
        } else {
            return Swal.fire({
                icon: 'error',
                title: 'Error: Ocurrió un error',
                text: 'Ocurrió un error al autenticarte. Prueba nuevamente.',
                confirmButtonText: 'Aceptar'
            })
        }
        // console.log(GoogleCredentials)
        
    }

    return (
        <Fragment>
            {showComponent && <div>
                {/* <h1 style={{textAlign: 'center'}}>Ingresa tu datos para iniciar sesión</h1> */}
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
                    <div className='home--Register'>
                        <Link to='/auth/register'>¿No estás registrado?</Link>
                    </div>
                    <div className='home--Social'>
                        <GoogleLogin
                            clientId="376676721491-30jufr1sfi4pd9a46mjs3ea741ncgid5.apps.googleusercontent.com"
                            buttonText="Inicia sesión con Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            className='GoogleStyle'
                        />
                    </div>
                </div>
            </div>}
            {showComponent === false && <Home />}
        </Fragment>
    );
};
