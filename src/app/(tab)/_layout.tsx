

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Icon, Label, NativeTabs, VectorIcon } from 'expo-router/unstable-native-tabs';
import React from 'react';
import { Platform } from 'react-native';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'index',
};
export default function TabLayout() {
  return (
    <NativeTabs 
    minimizeBehavior="onScrollDown" 
    backgroundColor={"#222733"} 
    labelStyle={{color: "white", fontSize: 15, fontWeight:500 }}
    blurEffect='dark'
    rippleColor={"gray"}
    tintColor={"coral"}
    indicatorColor={"gold"}
    >
      
      <NativeTabs.Trigger name='index'>
        <Label>Home</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MaterialIcons} name="home" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='collection'>
        <Label>Collection</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MaterialIcons} name="collections" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='summary'>
        <Label>Summary</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MaterialIcons} name="summarize" />} />,
        })}
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name='tables'>
        <Label>Tables</Label>
        {Platform.select({
          ios: <Icon sf="house.fill" />,
          android: <Icon src={<VectorIcon family={MaterialIcons} name="pivot-table-chart" />} />,
        })}
      </NativeTabs.Trigger>
    </NativeTabs>
    // <Tabs
    //     screenOptions={{
    //         headerShown: false,
    //         tabBarStyle:{}
    //     }}
    // >
    //     <Tabs.Screen name="index" />
    //     <Tabs.Screen name='collection' />
    //     <Tabs.Screen name='summary' />
    //     <Tabs.Screen name='tables'/>
    // </Tabs>
  )
}