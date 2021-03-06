import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import {BrowserRouter, Switch} from "react-router-dom";
import SignRoute from "./hoc/Routes/SignRoute"
import OnlyAuthorizedRoute from "./hoc/Routes/OnlyAuthorizedRoute"
import SignIn from "./components/Sign/SignIn"
import SignUp from "./components/Sign/SignUp"
import Main from "./components/Main/Main"
import Car from "./components/Car/Car"
import User from "./components/User/User"
import DefaultRoute from "./hoc/Routes/DefaultRoute";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <DefaultRoute path="/" exact component={Main}/>
                <OnlyAuthorizedRoute path="/car" exact component={Car}/>
                <OnlyAuthorizedRoute path="/user" exact component={User}/>
                <SignRoute path="/signin" exact component={SignIn}/>
                <SignRoute path="/signup" exact component={SignUp}/>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
