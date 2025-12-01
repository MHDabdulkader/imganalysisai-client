
import tw from '@/src/lib/tailwind';
import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useAppColorScheme } from 'twrnc';
import GradientBtn from '../GradientBtn';
import GradientInput from '../GradientInput';

export default function PromptInput() {
    const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);
    const [promptText, setPromptText] = useState("");
    return (
        <View>
            <GradientInput>
                <View style={tw`bg-slate-600 rounded-3xl px-2 `}>
                    <TextInput
                        placeholder='Type your prompt here..'
                        placeholderTextColor={"#1D94C8"}
                        textAlignVertical='top'
                        style={tw` py-2 h-20 ${colorScheme === "dark" ? "text-white" : "text-black"} text-sm`}
                        multiline={true}
                        onChangeText={(text)=> setPromptText(text)}
                    />
                </View>
            </GradientInput>
            <View style={tw`flex-row gap-2 justify-between py-2`}>
                <GradientBtn onPress={()=> console.log("")}>
                    <Text style={tw`text-center text-white font-semibold`}>Surprise Me</Text>
                </GradientBtn>
                <GradientBtn onPress={()=> console.log("")}>
                    <Text style={tw`text-center text-white font-semibold`}>Fantasy Landscape</Text>
                </GradientBtn>
            </View>
        </View>

    )
}