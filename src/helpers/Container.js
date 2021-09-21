import React from 'react';

export const Container = ({ children, fontColor }) => {
    return (
        <div className='ContainerStyle' style={{backgroundColor: fontColor}}>{children}</div>
    );
};
