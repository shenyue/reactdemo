import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.username = props.username;
        this._password = props.password;
        this.style = props.style;
    }

    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }

    render() {
        return (
        <h4 style={this.style}>{this.username}</h4>
        );
    }
}


export default Login;