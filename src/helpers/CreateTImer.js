import { useEffect } from "react";

export function CreateTimer(Time = null, Restart = false){
    let InitialTime = Time;
    let Timer;

    useEffect(() => {
        clearInterval(Timer);
        Timer = setInterval(() => {
            UpdateInterval()
        }, 1200);
        // if(Restart === true){
        //     clearInterval(Timer);
        //     Timer = setInterval(() => {
        //         UpdateInterval()
        //     }, 1200);
        // }
        // else {
        //     Timer = setInterval(() => {
        //         UpdateInterval()
        //     }, 1200);
        // }
        return () => {
            clearInterval(Timer);
            
        }
    }, [Time, Restart, UpdateInterval])
    
    
    
    function UpdateInterval(){
        InitialTime--;
        if(InitialTime === 0 && InitialTime !== null){
            console.log('Se termino el tiempo de la ronda')
            return clearInterval(Timer);
        }
        console.log(InitialTime)
    }
    
    return InitialTime;
}