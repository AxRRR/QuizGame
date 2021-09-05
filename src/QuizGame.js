import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Sports } from './components/Categories/Sports';
import { NewPlayer } from './components/Home/NewPlayer';
import { Container } from './helpers/Container';

export const QuizGame = () => {
    const [showSports, setShowSports] = useState(true)
    return (
        <div>
            <Switch>
                <Route exact path='/home'>
                    <Container>
                        <NewPlayer/>
                    </Container>
                </Route>
                <Route exact path='/category/sports'>
                    <Container>
                    {showSports && <Sports CloseSportsPage={setShowSports} />}
                    </Container>
                </Route>
                <Redirect to='/home' />
            </Switch>
        </div>
    );
};