import React from 'react';
import ClassicVector from '../../assets/images/Classicmode.png';
import DoublesVector from '../../assets/images/2v2Vector.png';
import GrupalVector from '../../assets/images/3v3Vector.png'

export const Gamemode = () => {

    const CategoriesHandler = () => {

    }

    return (
        <div className='gm--main'>
            <div 
                className='gm--container'
                onClick={() => CategoriesHandler()}>
                <div className='gm--icontainer'>
                    <img 
                        src={ClassicVector} 
                        alt='3v3' 
                        className='gm--images' 
                    />
                </div>
                <div className='gm--tcontainer'>
                    <h5>Clásico</h5>
                </div>
            </div>
            <div 
                className='gm--container'
                onClick={() => CategoriesHandler()}>
                <div className='gm--icontainer'>
                    <img 
                        src={DoublesVector} 
                        alt='3v3' 
                        className='gm--images' 
                    />
                </div>
                <div className='gm--tcontainer'>
                    <h5>Versus</h5>
                </div>
            </div>
            <div 
                className='gm--container'
                onClick={() => CategoriesHandler()}>
                <div className='gm--icontainer'>
                    <img 
                        src={GrupalVector} 
                        alt='3v3' 
                        className='gm--images' 
                    />
                </div>
                <div className='gm--tcontainer'>
                    <h5>Grupal</h5>
                </div>
            </div>
        </div>
    );
};
