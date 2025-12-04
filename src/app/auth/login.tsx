import GradientInput from '@/src/component/GradientInput';
import GradientText from '@/src/component/GradientText';
import tw from '@/src/lib/tailwind';
import { Formik } from "formik";
import React, { useState } from 'react';
import { ActivityIndicator, Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppColorScheme } from 'twrnc';

import * as Yup from "yup";

import GradientBtn from '@/src/component/GradientBtn';
import { useLoginMutation } from '@/src/redux/slice/apiSlice/authSlices';
import AntDesign from '@expo/vector-icons/AntDesign';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 6 characters!")
    .required("Password is required")
})




export default function Login() {
  const { top } = useSafeAreaInsets();
  const [colorScheme, toggleColorScheme, setColorScheme] = useAppColorScheme(tw);

  const [passwordShow, setPasswordShow] = useState(false);
  const [fetchLogin, {
    data: LoginData,
    isLoading: isLoadingLogin,
    isError: isErrorLogin,
    error: errorLogin,

  }] = useLoginMutation();




  return (
    <KeyboardAvoidingView
      style={tw`flex-1 bg-primary `}
      behavior={Platform.OS ? "height" : "position"}
      keyboardVerticalOffset={Platform.OS ? 60 : -120}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
        accessible={false}
      >
        <ScrollView
          style={tw`flex-grow pt-[${top}] px-4`}
          contentContainerStyle={tw`pb-8 flex-1 justify-center `}
          keyboardShouldPersistTaps="handled"
        >
          <View>
            {GradientText({
              maskElement: <Text style={tw`font-bold text-2xl text-center`}>Welcome Back!</Text>,
              linearView: <Text style={tw`font-bold text-2xl opacity-0 text-center`}>Welcome Back!</Text>
            })}
          </View>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              console.log("values ", values)
              const requestBody = {
                email: values.email,
                password: values.password
              };
              try {
                const response = await fetchLogin(requestBody).unwrap();

                console.log('========= login response ============ ', JSON.stringify(response, null, 2));

                if (response?.status === 200) {
                  await AsyncStorage.setItem("access_token", response?.data?.access_token);
                  await AsyncStorage.setItem("refresh_token", response?.data?.refresh_token)

                  setTimeout(()=>router.push({
                    pathname: "/tosater",
                    params: {
                      res: "Login",
                      status: "success"
                    }
                  }), 1000 )
                  setTimeout(()=>  router.replace("/(tab)"), 2000)
                 

                } else {
                  router.push({
                    pathname: "/tosater",
                    params: {
                      res: response?.message,
                      status: "error"
                    }
                  })
                }

              } catch (err) {
                const errorMessage = err instanceof Error ? err.message : "Login Failed";
                console.log(" ============ log in error ============== ", err)
                router.push({
                  pathname: "/tosater",
                  params: {
                    res: errorMessage,
                    status: "error"
                  }
                })
              }






            }}
          >
            {({
              handleChange,
              handleBlur,
              handleReset,
              handleSubmit,

              values,
              errors,
              touched,
              setFieldTouched,
              setFieldValue
            }) => (
              <View style={tw`pt-20 gap-4`}>
                <View>
                  <GradientInput>
                    <View style={tw`bg-slate-600 rounded-3xl px-2 `}>
                      <TextInput
                        placeholder='Email address'
                        placeholderTextColor={"#1D94C8"}
                        textAlignVertical='top'
                        value={values.email}
                        style={tw` py-2 h-10 ${colorScheme === "dark" ? "text-white" : "text-black"} text-sm`}
                        // multiline={true}
                        onChangeText={handleChange("email")}
                        onBlur={handleBlur("email")}
                      />
                    </View>

                  </GradientInput>
                  {touched.email && errors.email && (
                    <View style={tw`px-2 pt-2`}>
                      <Text style={tw`text-red-500 text-xs`}>{errors.email}</Text>
                    </View>
                  )
                  }
                </View>
                <View>
                  <GradientInput>
                    <View style={tw`bg-slate-600 rounded-3xl px-2 flex-row items-center justify-between`}>
                      <TextInput
                        placeholder='Password'
                        placeholderTextColor={"#1D94C8"}
                        textAlignVertical='top'
                        value={values.password}
                        style={tw` py-2 h-10 w-60 ${colorScheme === "dark" ? "text-white" : "text-black"} text-sm`}
                        // multiline={true}
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        secureTextEntry={!passwordShow}

                      />
                      <TouchableOpacity
                        onPress={() => setPasswordShow(!passwordShow)}
                      >
                        {
                          passwordShow ? <AntDesign name="eye-invisible" size={18} color={tw.color("secondary")} /> : <AntDesign name="eye" size={18} color={tw.color("secondary")} />
                        }
                      </TouchableOpacity>

                    </View>

                  </GradientInput>
                  {touched.password && errors.password && (
                    <View style={tw`px-2 pt-2`}>
                      <Text style={tw`text-red-500 text-xs`}>{errors.password}</Text>
                    </View>
                  )}
                </View>
                <View>
                  <TouchableOpacity onPress={handleSubmit}>
                    <GradientBtn btnContainerStyle={tw`w-[100%] py-2`}>
                      {isLoadingLogin && <ActivityIndicator size={"small"} color={tw.color("secondary")} />}
                      <Text style={tw`text-center text-white text-lg font-bold`}>Login</Text>
                    </GradientBtn>
                  </TouchableOpacity>

                </View>
              </View>
            )}
          </Formik>

          <View style={tw`flex-row gap-2 justify-center py-4`}>
            <Text style={tw`text-base text-white `}>Create an account?</Text>
            <TouchableOpacity>
              {GradientText({
                maskElement: <Text style={tw`font-bold text-base text-center`}>Register</Text>,
                linearView: <Text style={tw`font-bold text-base opacity-0 text-center`}>Register</Text>
              })}
            </TouchableOpacity>

          </View>

        </ScrollView>
      </TouchableWithoutFeedback>

    </KeyboardAvoidingView>
  )
}