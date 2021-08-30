import React, { useEffect } from 'react';

export const EndScreen = ({ TotalPercentage = 0, CloseSportsPage }) => {
    useEffect(() => {
        CloseSportsPage(false);
        return () => {
            CloseSportsPage(true);
        }
    }, [TotalPercentage, CloseSportsPage])

    return (
        <div>
            {TotalPercentage > 30 ? 
                <h1>¡Enhorabuena obtuviste {TotalPercentage + '%'} de efectividad en esta ronda!</h1>
            :
                <h1>¡Finalizaste con {TotalPercentage + '%'} de efectividad en esta ronda! :(</h1>}
        </div>
    );
};
