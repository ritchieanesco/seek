import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AddClientForm from './AddClientForm';

const App = () => (
    <BrowserRouter>
        <div className='app'>
            <Switch>
                <Route path='/' component={AddClientForm}/>
            </Switch>
        </div>
    </BrowserRouter>
)

export default App;