import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Client from './Client';

const App = () => (
    <BrowserRouter>
        <div className='app'>
            <Switch>
                <Route path='/' component={Client}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default App;