import React from 'react';
import './App.css';
import Home from '../Home/Home'
import Welcome from "../Welcome/Welcome";
import Header from '../common/Header';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {
    render() {

        return (
            <div className="App">
                <Header />
                <Router>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/welcomeUser' component={Welcome}/>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
