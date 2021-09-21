import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Answers } from './components/Categories/Answers';
import { NewPlayer } from './components/Home/NewPlayer';
import { NameUserContext } from './Context/NameUserContext';
import { Container } from './helpers/Container';
import { SportsQuestions } from './resources/SportsQuiz';

export const QuizGame = () => {
    const [showSports, setShowSports] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [nameuser, setNameuser] = useState(null)

    return (
        <div>
            <NameUserContext.Provider
                value={{
                    isEmpty,
                    setIsEmpty,
                    nameuser,
                    setNameuser
                }}>
                <Switch>
                    <Route exact path='/home'>
                        <Container>
                            <NewPlayer/>
                        </Container>
                    </Route>
                    <Route exact path='/category/sports'>
                        {showSports && <Answers ArrType={SportsQuestions.Questions} CloseSportsPage={setShowSports} />}
                    </Route>
                    <Redirect to='/home' />
                </Switch>
            </NameUserContext.Provider>
        </div>
    );
};