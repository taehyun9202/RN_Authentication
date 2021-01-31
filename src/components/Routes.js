import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'

import Login from '../pages/Login'
import Signup from '../pages/Signup'

const Routes = () => {
    return (
        <Router>
            <Stack key="root" hideNavBar>
                <Scene key="login" component={Login} title="Login" initial={true} />
                <Scene key="singUp" component={Signup} title="Singup" />
            </Stack>
        </Router>
    )
}

export default Routes