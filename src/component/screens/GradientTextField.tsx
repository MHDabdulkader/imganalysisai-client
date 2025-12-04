

import tw from '@/src/lib/tailwind';
import React, { useCallback, useRef, useState } from 'react';
import { NativeSyntheticEvent, TargetedEvent, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

import { SvgXml } from 'react-native-svg';
import GradientInput from '../GradientInput';


interface InputTextIconProps {
    onPress?: () => void;
    svgFirstIcon?: string;
    fieldStyle?: any;
    focusSTyle?: any;
    label?: string;
    required?: boolean;
    labelStyle?: any;
    svgSecondIcon?: string;
    placeholder?: string;
    placeholderStyle?: any;
    textInputProps?: TextInputProps;
    inputTextStyle?: any,
    svgSecondOnPress?: () => void;
    textXValue?: number;
    textXOutRangeFirst?: number;
    textXOutRangeSecond?: number;
    svgSecondStyle?: any;
    errorText?: string;
    errorSvgIcon?: any;
    onFocus?: () => void;
    onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void;
    onChangeText?: (text: string) => void;
    value?: string;
    touched?: boolean;
    containerLayoutStyle?: any;
    containerStyle?: any;
    editable?: boolean;
    height?: number

}
export default function GradientInputText({
    onPress,
    svgFirstIcon,
    fieldStyle,
    focusSTyle,
    label,
    required,
    labelStyle,
    svgSecondIcon,
    placeholder,
    textXValue = -28,
    textXOutRangeFirst = 25,
    textXOutRangeSecond = 45,
    errorSvgIcon,
    textInputProps,
    errorText,
    onBlur,
    inputTextStyle,
    onChangeText,
    onFocus,
    svgSecondStyle,
    svgSecondOnPress,
    value,
    touched,
    containerLayoutStyle,
    containerStyle,
    editable = true,
    placeholderStyle,
    height
}: InputTextIconProps) {
    const [focus, setFocus] = useState<boolean>(false);
    const textInputRef = useRef<TextInput>(null);
    const [text, setText] = useState("");
    const handleFocus = useCallback(() => {
        setFocus(true);
        textInputRef.current?.focus();
    }, []);
    return (
        <TouchableOpacity
            disabled={!editable}
            activeOpacity={1}
            onPress={editable ? onPress : handleFocus}
            // onPress={onPress}
            style={[tw``, containerLayoutStyle]}
        >
            {label && (
                <Text style={[tw`text-base font-MontserratSemiBold py-2 text-textMain`]}>
                    {label}
                    {required && (
                        <Text style={[tw`text-red-500 font-MontserratRegular`]}>*</Text>
                    )}
                </Text>
            )}
            <View
                style={[tw`flex-row w-full items-center px-6 gap-2 ${errorText ? "border-red-500" : ""
                    } rounded-full h-14`,
                textInputProps?.multiline ? tw`py-2 min-h-30 items-start` : tw`h-14 items-center`
                    , containerStyle]}
            >
                {svgFirstIcon && <SvgXml xml={svgFirstIcon} />}
                {/* {placeholder?.trim() &&
                <Text>{placeholder}</Text>
            } */}

                <GradientInput>
                    <View style={tw`bg-slate-600 rounded-3xl px-2 `}>
                        <TextInput
                            onFocus={() => {
                                onFocus && onFocus();
                            }}
                            onBlur={(e) => {
                                onBlur && onBlur(e);
                            }}
                            style={[tw`flex-1 px-2 py-1 ${height ? `h-[${height}]` : "h-14"} text-base  font-MontserratRegular text-textMain`, textInputProps?.multiline && tw`min-h-28 align-text-top`, inputTextStyle]}
                            {...textInputProps}
                            value={value || text}
                            onChangeText={(text) => {
                                setText(text);
                                onChangeText && onChangeText(text);
                            }}

                        />{svgSecondIcon &&
                            <TouchableOpacity
                                onPress={svgSecondOnPress}
                                disabled={!svgSecondOnPress}
                            >
                                <View>
                                    <SvgXml xml={svgSecondIcon} />
                                </View>
                            </TouchableOpacity>
                        }
                    </View>

                </GradientInput>
                {/* Error Text */}
                {errorText && touched && (
                    <View style={tw`flex-row items-center gap-1 mt-1`}>
                        {errorSvgIcon && <SvgXml xml={errorSvgIcon} />}
                        <Text style={tw`text-red-500 text-xs font-MontserratRegular`}>
                            {errorText}
                        </Text>
                    </View>
                )}

            </View>
        </TouchableOpacity>
    )
}