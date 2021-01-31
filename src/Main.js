import React from 'react'
import { StyleSheet, View, StatusBar } from 'react-native'
import { connect } from 'react-redux'
import Routes from './components/Routes'

const Main = () => {
    return (
        <View style={styles.container}>
            <StatusBar style={styles.statusBar} />
            <Routes />
        </View>
    )
}

export default connect(null, null)(Main)

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#455a64',
      flex: 1,
      justifyContent: 'center',
    },
    statusBar: {
      backgroundColor: 'tomato'
    }
})
