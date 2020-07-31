import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from '../components/pages/Home/Home';
import Profile from '../components/pages/Profile/Profile';

const Routes = () => (
        <Router>
            <>
                <Switch>
                    <Route path="/home" exact component={Home} />
                    <Route path='/profile' component={Profile}/>
                </Switch>
            </>
        </Router>
)

export default Routes;