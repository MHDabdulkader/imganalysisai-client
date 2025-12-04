import { Stack } from 'expo-router';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';


export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};


export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="index" />
        <Stack.Screen name='(tab)' />
        <Stack.Screen name='modal/custom_modal' />
        <Stack.Screen name='auth' />
        <Stack.Screen 
          name='tosater'
          options={{
            sheetAllowedDetents: "fitToContents",
            presentation: "formSheet",
            contentStyle:{
              backgroundColor: "transparent",
              paddingBottom: 10
            }
          }}
        
        />
      </Stack>
    </Provider>

  )
}