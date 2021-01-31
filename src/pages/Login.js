import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux'
import Logo from '../components/Logo'
import Form from '../components/Form'
import { TouchableHighlight } from 'react-native-gesture-handler'

const Login = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Form type={'Log In'}/>
            <View style={styles.signupTextContainer}>
                <TouchableOpacity onPress={() => Actions.singUp()}>
                    <Text style={styles.signupText} >Don't Have an account?</Text>
                </TouchableOpacity>
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
        fontSize: 18,
        color: 'white'
    }
})
