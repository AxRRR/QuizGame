import React, { useEffect, useState } from 'react';
import { CompareAnswers } from '../../helpers/CompareAnswers';
import { CreateTimer } from '../../helpers/CreateTImer';
import { GetActualTime } from '../../helpers/GetActualTime';
import { SportsQuestions } from '../../resources/SportsQuiz';
import { EndScreen } from '../EndScreen';

export const Sports = () => {
    const [CloseSportsPage, setCloseSportsPage] = useState(true)
    const [QuestionID, setQuestionID] = useState(1)
    const [Index, setIndex] = useState(0)
    const [CorrectAnswers, setCorrectAnswers] = useState(0)
    const [WrongAnswers, setWrongAnswers] = useState(0)
    const [FinalPercentage, setFinalPercentage] = useState(0)
    const [InitialTime, setInitialTime] = useState(null)

    useEffect(() => {
        getInitialTime();
    }, [])

    function getInitialTime(){
        setInitialTime(
            GetActualTime()
        );
    }

    // console.log(QuestionID, CorrectAnswers, WrongAnswers, FinalPercentage, InitialTime)

    return (
        <div>
                {CreateTimer(60)}
            {CloseSportsPage === true && <div>
                {SportsQuestions.Questions.slice(Index, QuestionID).map((q) => 
                <div key={Math.random()}>
                    <h1>{QuestionID + '/' + SportsQuestions.Questions.length}</h1>
                    <h1>{q.question}</h1>
                    {q.answers.map((q) => 
                        <div key={q.id}>
                            <p className='StyleLetter--answers'
                                onClick={() => CompareAnswers(
                                    QuestionID,
                                    setQuestionID,
                                    Index,
                                    setIndex,
                                    q.isTrue,
                                    CorrectAnswers,
                                    setCorrectAnswers,
                                    WrongAnswers,
                                    setWrongAnswers,
                                    setFinalPercentage
                                )}
                                onClickCapture={() => CreateTimer(60)}>
                                {q.answer}
                            </p>
                        </div>
                    )}
                </div>
                )}
            </div>}
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
