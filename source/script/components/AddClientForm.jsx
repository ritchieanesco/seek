import React, { Component } from 'react';

class AddClientForm extends Component {

    addClient = (e) => {
        e.preventDefault();
        this.props.addClient({
            name: this.name.value,
            logo: this.logo.value
        });
    }

    render () {
        return (
            <form ref={(input) => this.clientForm = input} onSubmit={this.addClient}>
                <input ref={(input) => this.name = input} type='text' placeholder='Client Name' />
                <input ref={(input) => this.logo = input} type='text' placeholder='Client Logo' />
                <button type='submit'>Add Client</button>
            </form>
        )
    }
}

export default AddClientForm;