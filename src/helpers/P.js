import React from 'react';

export const P = ({ children, answers = false }) => {
    return (
        <div>
            {answers && <div className='StyleLetter--answers'>{children}</div>}
            {!answers && <div className='StyleLetter'>{children}</div>}
        </div>
    );
};