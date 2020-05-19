import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import Auth from '../../utils/Auth/Auth'
import DefaultLayout from "../DefaultLayout";

const OnlyAuthorizedRoute = ({component: Component, ...rest}) => {
    if (!Auth.isLoggedIn) {
        return (<Redirect to={"/signin"}/>)
    }
    return (
        <Route {...rest} render={props => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )}/>
    )
}

export default OnlyAuthorizedRoute;
