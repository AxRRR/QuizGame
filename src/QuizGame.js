import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Answers } from './components/Categories/Answers';
import { Authentication } from './components/Home/Authentication';
import { NameUserContext } from './Context/NameUserContext';
import { Container } from './helpers/Container';
import { SportsQuestions } from './resources/SportsQuiz';

export const QuizGame = () => {
    const [showSports, setShowSports] = useState(true)
    const [isEmpty, setIsEmpty] = useState(false)
    const [nameuser, setNameuser] = useState(null)
    const [isLogin, setisLogin] = useState(false)

    return (
        <div>
            <NameUserContext.Provider
                value={{
                    isEmpty,
                    setIsEmpty,
                    nameuser,
                    setNameuser,
                    isLogin,
                    setisLogin
                }}>
                <Switch>
                    <Route exact path='/home'>
                        <Container>
                            <Authentication />
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