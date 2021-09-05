import { CreateTimer } from "./CreateTImer";

export function CompareAnswers(
    QuestionID,
    setQuestionID,
    Index,
    setNewIndex,
    isTrue,
    CorrectAnswers,
    setCorrectAnswers, 
    WrongAnswers,
    setWrongAnswers,
    setFinalPercentage){

    // Total Number of the all questions

    const FinalQuestionNumber = 10;

    // Compare user Answer, if the answer is true set one point, else just set a wrong answer
    
    switch (isTrue) {
        case true:
            setCorrectAnswers(CorrectAnswers+1)
            break;

        case false:
            setWrongAnswers(WrongAnswers+1)
            break;

        default:
            break;
    }

    // If the round has finished... return the Percentage Total

    if(QuestionID === FinalQuestionNumber){
        return setFinalPercentage(CorrectAnswers*100/FinalQuestionNumber);
    }

    // If not... continue the next question

    setQuestionID(QuestionID+1)
    setNewIndex(Index+1)
    // CreateTimer(60, true)
}