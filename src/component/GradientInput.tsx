

import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import tw from '../lib/tailwind'

interface GradientInputProps {
    children: React.ReactNode
}


export default function GradientInput({ children }: GradientInputProps) {
    return (
        <LinearGradient
            colors={['#9F3BDB', '#1D94C8']}
            start={{ x: 0.85, y: 0.15 }}
            end={{ x: 0.15, y: 0.85 }}
            locations={[0, 1]}
            style={tw`rounded-3xl p-[2]`}
        >
            {children}
        </LinearGradient>
    )
}