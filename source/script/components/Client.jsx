import React, { Component } from 'react';
import AddClientForm from './AddClientForm';

class Client extends Component {

    state = {
        clients: {}
    }
    addClient = (client) => {
        const clients = {...this.state.clients};
        clients[client.name] = client;
        this.setState({
            clients: clients
        });
    }
    render () {
        return (
            <AddClientForm addClient={this.addClient} />
        )
    }
};

export default Client;