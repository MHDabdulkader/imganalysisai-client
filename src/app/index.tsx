

import Feather from '@expo/vector-icons/Feather'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Animated, { FadeInDown } from "react-native-reanimated"
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useAppColorScheme, useDeviceContext } from 'twrnc'
import GradientIcon from '../component/GradientIcon'
import GradientText from '../component/GradientText'
import tw from '../lib/tailwind'

export default function RootIndex() {
  const { top } = useSafeAreaInsets();
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: "dark"
  })

  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);


  useEffect(() => {
    const checkAuth = async()=>{
      const access_token = await AsyncStorage.getItem("access_token");
      console.log("======= access token =========== ", access_token);
      if(access_token){
        router.replace("/(tab)")
      }
      else{
        router.replace("/auth/login")
      }
    }


    

    setTimeout(checkAuth, 2000)
  }, [])
  return (
    <View style={tw`flex-1 bg-[#222733] justify-center items-center`}>
      {GradientIcon({
        maskElement: <Feather name="coffee" size={48} color={colorScheme === "dark" ? "#1D94C8" : "black"} />,
        linearView: <Feather name="coffee" size={48} color="tranparent" style={tw`opacity-0`} />
      })}
      <Animated.View
        entering={FadeInDown.duration(1000).springify().damping(200).stiffness(200)}
      >
        {GradientText({
          maskElement: <Text style={tw`font-bold text-lg `}>Coffee</Text>,
          linearView: <Text style={tw`font-bold text-lg opacity-0`}>Coffee</Text>
        })}
      </Animated.View>
    </View>
  )
}