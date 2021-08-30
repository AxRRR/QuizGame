import React, { useState } from 'react';
import { CompareAnswers } from '../../helpers/CompareAnswers';
import { SportsQuestions } from '../../resources/SportsQuiz';

export const Sports = () => {
    const [QuestionID, setQuestionID] = useState(1)
    const [Index, setIndex] = useState(0)
    const [CorrectAnswers, setCorrectAnswers] = useState(0)
    const [WrongAnswers, setWrongAnswers] = useState(0)

    console.log(QuestionID, CorrectAnswers, WrongAnswers)

    return (
        <div>
            {SportsQuestions.Questions.slice(Index, QuestionID).map((q) => 
            <div>
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
                                setWrongAnswers
                            )}>{q.answer}</p>
                    </div>
                )}
            </div>
            )}
        </div>
    );
};
