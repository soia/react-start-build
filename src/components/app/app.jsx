import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { HomePage, SomePage, PageNotFound } from '../../components/pages';

import Header from '../layouts/header';
import Footer from '../layouts/footer';

import './app.module.scss';
import './app.scss';
import '../assets/styles/_reset.scss';
import '../assets/styles/_fonts.scss';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/somepage" component={SomePage} />
                <Route component={PageNotFound} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
