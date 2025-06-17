import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import { name } from '../node_modules/ajv/dist/compile/codegen/code';

const RootLayout = () => {
  return (
      <Stack
        screenOptions={{
          headerStyle: {backgroundColor: "#ddd"},
          headerTintColor: '#333'
        }
        
        }
      >
        <Stack.Screen name="index" options={{title: 'Home'}}/>
        <Stack.Screen name="about" options={{title: 'About'}}/>
        <Stack.Screen name="contact" options={{title: 'Contact', headerShown: false}}/>
      </Stack>
     
   
  )
}

export default RootLayout

const styles = StyleSheet.create({})