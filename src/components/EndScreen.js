import React, { useEffect, useState } from 'react';
import { TransformTime } from '../helpers/TransformTime';

export const EndScreen = ({ TotalPercentage = 0, CloseSportsPage, InitialTimeRound }) => {
    const [FinalTIme, setFinalTIme] = useState(null)
    const [CompleteTime, setCompleteTime] = useState(null)

    useEffect(() => {
        const Day = new Date();
        setFinalTIme(Day.getHours() + ':' + Day.getMinutes() + ':' + Day.getSeconds());

        function EndTheRound(){
            CloseSportsPage(false);

            setCompleteTime(
                TransformTime(InitialTimeRound, FinalTIme)
            );
        }

        EndTheRound();
        return () => {
            CloseSportsPage(true);
        }
    }, [TotalPercentage, CloseSportsPage, InitialTimeRound, FinalTIme])

    return (
        <div>
            {TotalPercentage > 30 ? 
            <div>
                <h1>¡Enhorabuena obtuviste {TotalPercentage + '%'} de efectividad en esta ronda!</h1>
                {!!CompleteTime && <h1>Terminaste en un tiempo de {CompleteTime}</h1>}
            </div>
            :
            <div>
                <h1>¡Finalizaste con {TotalPercentage + '%'} de efectividad en esta ronda! :(</h1>
                {!!CompleteTime && <h1>Terminaste en un tiempo de {CompleteTime}</h1>}
            </div>}
        </div>
    );
};
