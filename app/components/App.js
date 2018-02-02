import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';

import Home from './Home';
import Info from './Info';
export default function App(props) {

    const { data } = props;

    return (
        <div>
            Your React Node app is set up!
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/page" exact render={() => (<Redirect to="/page/general" />)} />
                <Route path="/page/:user" render={(location) => (<Info data={data} location={location} />)} />
            </Switch>
        </div>
    )
}