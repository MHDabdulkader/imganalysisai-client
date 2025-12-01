

import MaskedView from "@react-native-masked-view/masked-view"
import React from 'react'
import LinearGradient from "react-native-linear-gradient"
interface GradientIconProp {
    maskElement?: any,
    linearView?: any,
    // iconView?: any
}

export default function GradientIcon({ maskElement, linearView }: GradientIconProp) {
    return (
        <MaskedView
            maskElement={maskElement}
        >
            <LinearGradient
                colors={['#1D94C8', '#9F3BDB']}
                start={{ x: 0.01, y: 0.40 }}
                end={{ x: 0.99, y: 0.60 }}
                locations={[0.12, 1]}
                // style={{ flex: 1 }}
            >
                {linearView}
            </LinearGradient>
        </MaskedView>
    )
}