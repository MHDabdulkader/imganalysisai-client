import { router, useGlobalSearchParams, useLocalSearchParams, usePathname } from 'expo-router';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import tw from '../lib/tailwind';

export default function Tosater() {
    const {res, status} = useLocalSearchParams();
    const param = useGlobalSearchParams();
    const pathname = usePathname();

    useEffect(()=>{
        const current = pathname;

        const timer = setTimeout(()=> {
            if(router.canGoBack() && pathname === current){
                router.back();
            }
        }, Number(param?.timer) || 3000)

        return ()=> clearTimeout(timer);

    },[])
    let bgColor;
    if(status === 'success') bgColor = "bg-green-700";
    else if(status === "error") bgColor = "bg-red-700";
    else bgColor = "bg-blue-500"
  return (
    <View style={tw`px-2 rounded-2xl pb-4`}>
        <View style={tw`justify-center items-center p-4 rounded-xl ${bgColor}`}>
            <Text style={tw`text-base text-white`}>{res}</Text>
        </View>
      
    </View>
  )
}