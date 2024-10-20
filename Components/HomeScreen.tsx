import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function HomeScreen({route, navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>Welcome Sejawal 😀</Text>

      <View style={styles.btnContainer}>
     <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText} >Go Back</Text>
     </TouchableOpacity>
     </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt: {
        fontSize: 22
    },

    btnContainer: {
        marginTop: 15
    },

    button: {
     backgroundColor: '#0D92F4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    
    },

    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
      },
})