// import { useEffect, useMemo, useState } from "react";

// export function CreateTimer(Time = null, Restart = false){


    
//     useMemo(() => function StartCountDown(){
        
//     }, InitialTime)

//     const [Timer, setTimer] = useState([])

//     setTimer(setInterval(UpdateInterval, 1200));

//     function UpdateInterval(){
//         console.log('Se ejecuto el Update')
//     }

//     console.log(Timer)
//     const StartCountDown = () => {
//         if(Restart === true){
//             DestroyCountDown();
//         }
//         let Count = Time;
//         let Timer = setInterval(UpdateInterval, 1200);
//         const DestroyCountDown = () => clearInterval(Timer);
//         function UpdateInterval(){
//             Count--;
//             if(Count === 0 && Count !== null){
//                 console.log('Se termino el tiempo de la ronda')
//                 return DestroyCountDown();
//             }
//             console.log(Count)
//             return Count;
//         }
//     }
    
//     return [ StartCountDown ]
    // useEffect(() => {
    //     if(Time > InitialTime){
            
    //         console.log('Se Ejecuta')
    //     }
    //     else{ 
            
    //     }
    //     if(InitialTime < Time){
    //         clearInterval(Timer);
    //         Timer = setInterval(() => {
    //             UpdateInterval()
    //         }, 1200);
    //     }
    //     else {
    //         Timer = setInterval(() => {
    //             UpdateInterval()
    //         }, 1200);
    //     }
    //     return () => {
    //         clearInterval(Timer);
            
    //     }
    // }, [])
    
    
    
    
// }