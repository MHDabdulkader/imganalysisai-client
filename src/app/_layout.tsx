import { Stack } from 'expo-router';
import React from 'react';


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};


export default function RootLayout() {
  return (
    <Stack 
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name="index"/>
        <Stack.Screen name='(tab)'/>
        <Stack.Screen name='modal/custom_modal'/>
    </Stack>
  )
}