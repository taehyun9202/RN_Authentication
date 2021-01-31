import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Field, reduxForm } from 'redux-form'

import Logo from '../components/Logo'
import Form from '../components/Form'

const Signup = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Form type={'Sign Up'}/>
            <View style={styles.signinTextContainer}>
                <TouchableOpacity onPress={() => Actions.login()}>
                    <Text style={styles.signinText}>Already Have an account?</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default reduxForm({
    form: 'register'
})(Signup)

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#455a64',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signinTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
    },
    signinText: {
        fontSize: 18,
        color: 'white'
    }
})