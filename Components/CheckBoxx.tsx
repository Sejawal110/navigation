import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox';


export default function Checkboxx(props: any) {
  return <Checkbox value={props.value} onValueChange={props.onValueChange} />
}

const styles = StyleSheet.create({
    
})