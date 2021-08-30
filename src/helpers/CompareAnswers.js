export function CompareAnswers(
    QuestionID,
    setQuestionID,
    Index,
    setNewIndex,
    isTrue,
    CorrectAnswers,
    setCorrectAnswers, 
    WrongAnswers,
    setWrongAnswers){

    if(isTrue === true) {
        setCorrectAnswers(CorrectAnswers+1)
    } else {
        setWrongAnswers(WrongAnswers+1)
    }

    setQuestionID(QuestionID+1)
    setNewIndex(Index+1)

    return {  }

}