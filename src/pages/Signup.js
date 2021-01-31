import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Logo from '../components/Logo'
import Form from '../components/Form'

const Signup = () => {
    return (
        <View style={styles.container}>
            <Logo />
            <Form type={'Sign Up'}/>
            <View style={styles.signinTextContainer}>
                <Text style={styles.signinText}>Already Have an account?</Text>
            </View>
        </View>
    )
}

export default Signup

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
        color: 'rgba(255, 255, 255, 0.7)',
        fontSize: 18
    }
})


