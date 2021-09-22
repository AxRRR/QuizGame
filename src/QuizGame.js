import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Answers } from './components/Categories/Answers';
import { Authentication } from './components/Home/Authentication';
import { NameUserContext } from './Context/NameUserContext';
import { Container } from './helpers/Container';
import { SportsQuestions } from './resources/SportsQuiz';
import { Home } from './components/Home/Home';

export const QuizGame = () => {
    const [showSports, setShowSports] = useState(true)
    const [dataUser, setDataUser] = useState({})
    const [isLogin, setIsLogin] = useState(false)

    return (
        <div>
            <NameUserContext.Provider
                value={{
                    dataUser, 
                    setDataUser,
                    isLogin,
                    setIsLogin
                }}>
                <Switch>
                    <Route exact path='/login'>
                        <Container>
                            <Authentication />
                        </Container>
                    </Route>
                    <Route exact path='/home'>
                        <Container>
                            <Home />
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