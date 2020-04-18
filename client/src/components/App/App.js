import React from 'react';
import './App.css';
import Home from '../Home/Home'
import About from "../About/About";
import Header from '../common/header'
import { Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom'
class App extends React.Component{
    render() {
        return (
            <div className="App">
                <Header/>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route route='/about' component={About}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
