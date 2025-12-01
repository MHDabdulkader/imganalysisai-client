

import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export default function RootIndex() {
  useEffect(()=>{
    setTimeout(()=>{
      router.push("/(tab)")
    }, 2000)
  },[])
  return (
    <View>
      <Text>RootIndex</Text>
    </View>
  )
}