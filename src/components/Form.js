import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'

const Form = props => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.inputBox}
                // underlineColorAndroid='rgba(0, 0, 0, 0)'
                placeholder='Enter Email'
                placeholderTextColor='white'
                autoCompleteType='email'
                keyboardType="email-address"
                textContentType="emailAddress"
                selectionColor='white'
                ref={(ref) => this.email = ref}
                onSubmitEditing={() => this.password.focus()}
            />
            <TextInput
                style={styles.inputBox}
                // underlineColorAndroid='rgba(0, 0, 0, 0)'
                placeholder='Enter Password'
                placeholderTextColor='white'
                autoCompleteType="password"
                selectionColor='white'
                secureTextEntry={true}
                ref={(ref) => this.password = ref}
            />
            <TouchableOpacity style={styles.buttonBox}>
                <Text style={styles.buttonText}>{props.type}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        // elevation: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 25,
        paddingHorizontal: 16,
        marginVertical: 10,
        fontSize: 18,
        color: 'white',
    },
    buttonBox: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 16,
        width: 300,
        borderRadius: 25,
        paddingVertical: 25,
        backgroundColor: '#1c313a',
        color: 'white',
        height: 40
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
    }
})
