import React from 'react';

export const P = ({ children, answers = null, correct }) => {
    return (
        <div>
            {/* {answers === true ? <div className='StyleLetter--answers'>{children}</div>
            : <div className='StyleLetter'>{children}</div>} */}
            {correct === 'green' && <div className='CorrectAnswer--green'>{children}</div>}
            {correct === 'red' && <div className='CorrectAnswer--red'>{children}</div>}
        </div>
    );
};