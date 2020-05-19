import React from 'react'
import {Redirect, Route} from 'react-router-dom'

import SignLayout from '../SignLayout'
import Auth from "../../utils/Auth/Auth";

const SignRoute = ({ component: Component, ...rest }) => {
    if (Auth.isLoggedIn) {
        return (<Redirect to={"/"}/>)
    }
    return (
        <Route {...rest} render={props => (
            <SignLayout>
                <Component {...props} />
            </SignLayout>
        )} />
    )
}

export default SignRoute;
