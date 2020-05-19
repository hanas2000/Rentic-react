import React from 'react'
import { Route } from 'react-router-dom'

import DefaultLayout from '../DefaultLayout'

const DefaultRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )} />
    )
}

export default DefaultRoute;
