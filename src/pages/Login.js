import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'

const Login = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Form type={'Log In'}/>
            <View style={styles.signupTextContainer}>
                <Text style={styles.signupText}>Don't Have an account?</Text>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    signupText: {
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 18
    }
})
