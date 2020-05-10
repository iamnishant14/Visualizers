import React from "react";
import WelcomeAuth from "./WelcomeAuth";
import Spinner from 'react-spinkit';

export default class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            welcomeRes: false,
            welcomeData: null
        }
    }

    componentDidMount() {
        let current = this;
        const retrieveWelcome = new WelcomeAuth();
        retrieveWelcome.retrieveWelcome()
            .then(resp => {
                current.setState({
                    welcomeRes: true,
                    welcomeData: resp.message
                });
            })
            .catch(err => {
                throw err;
            });
    }

    render() {
        if (this.state.welcomeRes === true) {
            return (
                <div className="jumbotron">
                    <h2>Welcome</h2>
                    <p>{this.state.welcomeData}</p>
                </div>
            );
        } else {
            return (
                <Spinner name='ball-pulse-rise'/>
            );
        }
    }
}
