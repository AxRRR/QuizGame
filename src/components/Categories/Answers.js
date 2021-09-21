import React, { useEffect, useState } from 'react';
import { CompareAnswers } from '../../helpers/CompareAnswers';
import { Container } from '../../helpers/Container';
// import { CreateTimer } from '../../helpers/CreateTImer';
import { GetActualTime } from '../../helpers/GetActualTime';
import { P } from '../../helpers/P';
// import { useCountdown } from '../../hooks/useCountdown';

import { EndScreen } from '../EndScreen';

export const Answers = ({ ArrType }) => {
    const [CloseSportsPage, setCloseSportsPage] = useState(true)
    const [QuestionID, setQuestionID] = useState(1)
    const [Index, setIndex] = useState(0)
    const [CorrectAnswers, setCorrectAnswers] = useState(0)
    const [WrongAnswers, setWrongAnswers] = useState(0)
    const [FinalPercentage, setFinalPercentage] = useState(0)
    const [InitialTime, setInitialTime] = useState(null)
    const [AnswerSelect, setAnswerSelect] = useState(null)
    const [ShowButtonNext, setShowButtonNext] = useState(false)
    const [ShowResponseText, setShowResponseText] = useState(false)
    // const [UpdateCountTime, SetUpdateCountTime] = useState(null)
    // const [RestarIndicator, setRestarIndicator] = useState(false)

    useEffect(() => {
        getInitialTime();
    }, [])

    // const { CountIndicator } = useCountdown({
    //     Time: UpdateCountTime,
    //     Restart: RestarIndicator
    // })
    
    // useEffect(() => {
    //     if(QuestionID > 1){
    //         setRestarIndicator(true)
    //     }
    //     SetUpdateCountTime(60)
    // }, [QuestionID])

    function getInitialTime(){
        setInitialTime(
            GetActualTime()
        );
    }

    // console.log(QuestionID, CorrectAnswers, WrongAnswers, FinalPercentage, InitialTime)

    const ShowResponse = (Response) => {
        setShowResponseText(true)
        setShowButtonNext(true)
        setAnswerSelect(
            Response
        )
    }

    return (
        <div>
            {/* {CreateTimer(60)} */}
            {/* <h1>{CountIndicator}</h1> */}
            <Container fontColor={'#84b6f4'}>

            
            {CloseSportsPage === true && <div>
                {ArrType.slice(Index, QuestionID).map((q) => 
                <div key={Math.random()}>
                    <h1>{QuestionID + '/' + ArrType.length}</h1>
                    <h1>{q.question}</h1>
                    {q.answers.map((q) => 
                    <label 
                        className='container' 
                        key={q.id}>
                            {q.answer}
                        {ShowButtonNext === true ? <input 
                            type='checkbox' 
                            name='radio'  
                        /> 
                        :
                        <input 
                            type='checkbox' 
                            name='radio' 
                            onClick={() => ShowResponse(q.isTrue)} 
                        />}
                        <span className='checkmark'></span>
                            {ShowResponseText === true && <div>
                                {q.isTrue ? <P correct={'green'}>Respuesta correcta</P> : <P correct={'red'}>Respuesta incorrecta</P>}
                                </div>}
                    </label>
                    )}
                    {ShowButtonNext && <button
                        onClick={() => CompareAnswers(
                            QuestionID,
                            setQuestionID,
                            Index,
                            setIndex,
                            AnswerSelect,
                            CorrectAnswers,
                            setCorrectAnswers,
                            WrongAnswers,
                            setWrongAnswers,
                            setFinalPercentage,
                            setShowResponseText,
                            setShowButtonNext
                        )}>Continuar
                    </button>}
                </div>
                )}
            </div>}
            </Container>
            {!!FinalPercentage && 
                <EndScreen 
                    TotalPercentage={FinalPercentage} 
                    CloseSportsPage={setCloseSportsPage}
                    InitialTimeRound={InitialTime}
                />
            }
        </div>
    );
};
