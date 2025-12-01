import GradientBgIcon from '@/src/component/GradientBgIcon';
import GradientIcon from '@/src/component/GradientIcon';
import GradientText from '@/src/component/GradientText';
import HeaderTitle from '@/src/component/HeaderTitle';
import PromptInput from '@/src/component/screens/PromptInput';
import tw from '@/src/lib/tailwind';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppColorScheme, useDeviceContext } from 'twrnc';


export default function TabIndex() {
  const { top } = useSafeAreaInsets();
  useDeviceContext(tw, {
    observeDeviceColorSchemeChanges: false,
    initialColorScheme: "dark"
  })

  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);


  return (
    <ScrollView style={[tw`flex-1 bg-[#222733] px-4`, { paddingTop: top }]}>
      <HeaderTitle
        // logo={<Feather name="coffee" size={28} color= {colorScheme==="dark"? "#1D94C8": "black"} />}
        logo={GradientIcon({
          maskElement: <Feather name="coffee" size={28} color={colorScheme === "dark" ? "#1D94C8" : "black"} />,
          linearView: <Feather name="coffee" size={28} color="tranparent" style={tw`opacity-0`} />
        })}
        title={GradientText({
          maskElement: <Text style={tw`font-bold text-lg `}>Coffee</Text>,
          linearView: <Text style={tw`font-bold text-lg opacity-0`}>Coffee</Text>
        })}

        notificationIcon={<GradientBgIcon><MaterialIcons name="notifications" size={24} color={colorScheme === "dark"? "white": "black"}/></GradientBgIcon>}
      />
      <PromptInput />
      
      {/* <TextInput 
        placeholder='Type your prompt here..'
        style={tw`border border-`}
      /> */}
    </ScrollView>
  )
}