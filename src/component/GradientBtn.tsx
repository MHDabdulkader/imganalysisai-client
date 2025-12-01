import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import tw from '../lib/tailwind'

interface GradientBtnProps {
    children: React.ReactNode,
    onPress: ()=> void
}

export default function GradientBtn({ children, onPress }: GradientBtnProps) {
    return (
        <LinearGradient
            colors={['#9F3BDB', '#1D94C8']}
            start={{ x: 0.15, y: 0.15 }}
            end={{ x: 0.85, y: 0.85 }}
            locations={[0, 1]}
            style={tw`px-2 py-4 rounded-full w-[48%]`}
        >
            {children}
        </LinearGradient>
    )
}