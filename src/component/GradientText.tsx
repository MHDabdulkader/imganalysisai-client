

import MaskedView from "@react-native-masked-view/masked-view"
import React from 'react'
import LinearGradient from "react-native-linear-gradient"
interface GradientTextProp {
    maskElement?: any,
    linearView?: any
}

export default function GradientText({ maskElement, linearView }: GradientTextProp) {
    return (
        <MaskedView
            maskElement={maskElement}
        >
            <LinearGradient
                colors={['#9F3BDB', '#1D94C8']}
                start={{ x: 0.00, y: 0.50 }}
                end={{ x: 1.00, y: 0.50 }}
                locations={[0, 1]}
            // style={{ flex: 1 }}
            >
                {linearView}
            </LinearGradient>
        </MaskedView>
    )
}