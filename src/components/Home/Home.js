import React, { Fragment, useContext } from 'react';
// import { Link } from 'react-router-dom';
import { NameUserContext } from '../../Context/NameUserContext';
import { Gamemode } from './Gamemode';
import ProfileDefault from '../../assets/images/defaultimg.png'

export const Home = () => {
    const { nameuser } = useContext(NameUserContext);

    return (
        <Fragment>
            <main className='main--container'>
                <div className='main--fcontainer'>
                    <img 
                        src={ProfileDefault}
                        alt='profile'
                        className='main--profile' 
                    />
                    <h2 style={{color: '#b41d84'}}>¡Hola {nameuser}!</h2>
                </div>
                <div className='main--scontainer'>
                    {/* <h1  style={{color: '#9937F5'}}>Estadisticas</h1> */}
                    <p>Ganadas: 202</p>
                    <p>Perdidas: 20</p>
                    <p>Versus ganados: 20</p>
                    <p>Grupal ganados: 20</p>
                    <p>Lugar en el top: 13</p>
                    <p>Puntuacion general: 2003393</p>
                    <button className='main--button'>Ver top mundial</button>
                </div>
            </main>
            <header>
                <Gamemode /> 
            </header>
            {/* <header className='ContainerStyle'>
                <Link to='/category/sports' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>
                        <img 
                            src='https://pbs.twimg.com/media/EVpqufhUUAIqqu8.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                            />
                        <span>Deportes</span>
                    </div>
                </Link>
                <Link to='/category/history' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>  
                        <img 
                            src='https://www.cuhm.edu.mx/wpcuhm/wp-content/uploads/2018/05/creatividad-historia2.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                        />
                        <span>Historia</span>
                    </div>
                </Link>
                <Link to='/category/movies' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>
                        <img 
                            src='https://cdn.forbes.co/2020/02/Sala-de-cine-Reuters.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                        />
                        <span>Cine</span>
                    </div>
                </Link>
                <Link to='/category/tecnologie' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>
                        <img 
                            src='https://economipedia.com/wp-content/uploads/Tecnolog%C3%ADa-de-producto.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                        />
                        <span>Tecnologia</span>
                    </div>
                </Link>
            </header> */}
        </Fragment>
    );
};
