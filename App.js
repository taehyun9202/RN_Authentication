import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

import Login from './src/pages/Login'
import Signup from './src/pages/Signup'

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      {/* <Login /> */}
      <Signup />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#455a64',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  statusBar: {
    backgroundColor: 'tomato'
  }
})
