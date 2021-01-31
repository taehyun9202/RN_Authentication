import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

const Logo = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../image/logo.png')}
            />
            <Text style={styles.logoText}>Welcome</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      logo: {
          width: 80,
          height: 80,
      },
      logoText: {
          fontSize: 18,
          color: 'rgba(255, 255, 255, 0.7)',
          marginVertical: 15
      }
})
