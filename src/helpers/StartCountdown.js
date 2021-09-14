import React from 'react';
// import PropTypes from 'prop-types';

const StartCountdown = () => {
    const StartCountDown = () => {
        let Count = Time;
        let Timer = setInterval(UpdateInterval, 1200);
        if(Restart === true){
            DestroyCountDown();
            StartCountDown();
        }
        const DestroyCountDown = () => clearInterval(Timer);
        function UpdateInterval(){
            Count--;
            if(Count === 0 && Count !== null){
                console.log('Se termino el tiempo de la ronda')
                return DestroyCountDown();
            }
            console.log(Count)
            return setCountIndicator(Count);
        }
    }
};

// StartCountdown.propTypes = {};

// export default StartCountdown;