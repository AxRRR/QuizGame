import React from 'react';

export const TestCode = () => {
    let RandomCode = Math.random().toString(19).slice(-8).toUpperCase();
    console.log(RandomCode);

    // let TransformCode = RandomCode.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1-').trim().slice(0, 14);

    // console.log(TransformCode)

    return <div>
        <h1>TEst</h1>
    </div>
};
