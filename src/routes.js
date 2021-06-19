import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import Home from './views/home'
import login from './views/user/login'
import UserSignup from './views/user/user-signup'


function Routes(props) {
    return (
        <HashRouter>
            <Switch>
                <Route path="/login" component={ login } />
                <Route path="/user-signup" component={ UserSignup } />
                <Route path="/home" component={ Home } />

                {/* <AuthenticateRoute isUserAuthenticated={props.isUserAuthenticated} path="/home" component={ Home } />
                <AuthenticateRoute isUserAuthenticated={props.isUserAuthenticated} path="/launch-search" component={ LaunchSearch } />
                <AuthenticateRoute isUserAuthenticated={props.isUserAuthenticated} path="/launch-register/:id?" component={ launchRegister } /> */}
            </Switch>
        </HashRouter>
    )
}

export default Routes