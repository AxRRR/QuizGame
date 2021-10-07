import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Answers } from './components/Categories/Answers';
import { Authentication } from './components/Home/Authentication';
import { NameUserContext } from './Context/NameUserContext';
import { Container } from './helpers/Container';
import { SportsQuestions } from './resources/SportsQuiz';
import { Home } from './components/Home/Home';
import { TestCode } from './TestCode';
import { Lobby } from './components/others/Lobby';
import { Register } from './components/Home/Register';

export const QuizGame = () => {
    const [showSports, setShowSports] = useState(true)
    const [dataUser, setDataUser] = useState({})
    const [isLogin, setIsLogin] = useState(false)
    const [PartyData, setPartyData] = useState({ 
        body: { 
            status: false 
        } 
    })

    return (
        <div>
            <NameUserContext.Provider
                value={{
                    dataUser, 
                    setDataUser,
                    isLogin,
                    setIsLogin,
                    PartyData, 
                    setPartyData
                }}>
                <Switch>
                    <Route exact path='/test'>
                        <TestCode />    
                    </Route>
                    <Route exact path='/register'>
                        <Container>
                            <Register />
                        </Container>
                    </Route>
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
                    <Route exact path='/lobby/party-:partyId'>
                        <Container>
                            <Lobby />
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