import React, { Fragment, useContext, useState } from 'react';
import GoogleLogin from 'react-google-login';
import { Link, Redirect } from 'react-router-dom';
import Swal from 'sweetalert2';
import { NameUserContext } from '../../Context/NameUserContext';
import IsEmpty from '../../helpers/IsEmpty';
import { RequestGoogleLogin, RequestLoginUser } from '../../helpers/LoginHandler';
import { useForm } from '../../hooks/useForm';
import { LoadingPage } from '../others/LoadingPage';

export const Login = () => {
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
        return Swal.fire({
            icon: 'error',
            title: 'Error: Campos inválidos',
            text: 'Debes de rellenar los campos (min: 3 caracteres)',
            confirmButtonText: 'Aceptar'
        })
    }
    else {
        const body = await RequestLoginUser(form.nick, form.password);

        LoadingPage(true);
            setTimeout(() => {
                // ACÄ PONDREMOS UN CARGADOR...
                setDataUser({
                    name: body.name,
                    profileimg: body.profileimg
                });
                setIsLogin(true);
                LoadingPage(false);
                setshowComponent(false);
            }, 4000);
    }
}

const responseGoogle = async(GoogleCredentials) => {
    const { body } = await RequestGoogleLogin(GoogleCredentials); 

    console.log(body)

    LoadingPage(true);
        setTimeout(() => {
        // ACÄ PONDREMOS UN CARGADOR...
        setDataUser({
            body
        });
        setIsLogin(true);
        LoadingPage(false);
        setshowComponent(false);
    }, 4000);
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
            {showComponent === false && <Redirect to='/home' />}
        </Fragment>
    );
};
