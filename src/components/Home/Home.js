import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NameUserContext } from '../../Context/NameUserContext';

export const Home = () => {
    const { nameuser } = useContext(NameUserContext);

    return (
        <Fragment>
            <h1>¡Hola {nameuser}, escoge una categoria para comenzar el juego!</h1>
            <header className='ContainerStyle'>
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
            </header>
        </Fragment>
    );
};
