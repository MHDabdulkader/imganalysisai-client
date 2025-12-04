import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name='register' />
      <Stack.Screen name='login' />
    </Stack>
  )
}