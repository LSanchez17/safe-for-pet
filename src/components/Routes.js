import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from '../App';
import Dashboard from './Dashboard';

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/'>
                {/* Home Page */}
                <App />
            </Route>
            
            <Route exact path='/infographics'>
                {/* Dashboards duhh */}
                <Dashboard />
            </Route>

            <Redirect to='/' />
        </Switch>
    )
};

export default Routes;