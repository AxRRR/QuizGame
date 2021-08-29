import React from 'react';
import { P } from '../../helpers/P';
import { SportsQuestions } from '../../resources/SportsQuiz';

export const Sports = () => {
    console.log(SportsQuestions)
    return (
        <div>
            {SportsQuestions.Questions.map((q) => 
            <div>
                <P>{q.question}</P>
            {q.answers.map((q) => 
            <div key={q.id}>
                <P onClick={() => console.log(q.isTrue)}>{q.answer}</P>
            </div>)}
            </div>
            )}
        </div>
    );
};
