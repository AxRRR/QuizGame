import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { NameUserContext } from '../../Context/NameUserContext';

export const Home = () => {
    const { nameuser } = useContext(NameUserContext);

    return (
        <Fragment>
            <h1>¡Hola {nameuser}, escoge una categoria para comenzar el juego!</h1>
            <header className='ContainerStyle--Flex'>
                <Link to='/category/sports' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>
                        <img 
                            src='https://static.vecteezy.com/system/resources/previews/001/505/098/non_2x/soccer-sport-game-cartoon-free-vector.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                            />
                        <span>Deportes</span>
                    </div>
                </Link>
                <Link to='/category/history' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>  
                        <img 
                            src='https://i.pinimg.com/originals/85/f2/13/85f21330443925e97068150337a370e4.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                        />
                        <span>Historia</span>
                    </div>
                </Link>
                <Link to='/category/movies' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>
                        <img 
                            src='https://previews.123rf.com/images/kakigori/kakigori1611/kakigori161100035/68353294-dos-cine-linda-palomitas-de-ma%C3%ADz-y-refrescos-de-cola-animada-amigos-de-personaje-de-la-mano.jpg'
                            alt='Sports'
                            className='headerCategory--Image'
                        />
                        <span>Cine</span>
                    </div>
                </Link>
                <Link to='/category/tecnologie' className='headerCategory--Container'>
                    <div className='headerCategory--Font'>
                        <img 
                            src='https://i.pinimg.com/736x/3a/dc/62/3adc629089d01b6c834153921741f959.jpg'
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
