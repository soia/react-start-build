import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './app.scss';
import '../assets/styles/_reset.scss';
import '../assets/styles/_fonts.scss';

const Header = lazy(() => import('../layouts/header'));
const Footer = lazy(() => import('../layouts/footer'));
const HomePage = lazy(() => import('../../components/pages/home-page'));
const SomePage = lazy(() => import('../../components/pages/some-page'));
const PageNotFound = lazy(() => import('../../components/pages/page-not-found'));

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
