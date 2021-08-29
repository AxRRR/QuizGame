import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Sports } from './components/Categories/Sports';
import { Home } from './components/Home/Home';
import { Container } from './helpers/Container';

export const QuizGame = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/home'>
                    <Container>
                        <Home />
                    </Container>
                </Route>
                <Route exact path='/category/sports'>
                    <Container>
                        <Sports />
                    </Container>
                </Route>
                <Redirect to='/home' />
            </Switch>
        </div>
    );
};