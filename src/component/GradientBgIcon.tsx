

import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import tw from '../lib/tailwind'
interface GradientBgIconProps {
    children: React.ReactNode
}
export default function GradientBgIcon({ children }: GradientBgIconProps) {
    return (
        <LinearGradient
            colors={['#9F3BDB', '#1D94C8']}
            start={{ x: 0.15, y: 0.85 }}
            end={{ x: 0.85, y: 0.15 }}
            locations={[0, 1]}
            style={tw`p-2 justify-center items-center rounded-full `}
        >
            {children}
        </LinearGradient>
    )
}