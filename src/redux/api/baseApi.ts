import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react"
import axios, { AxiosRequestConfig, AxiosResponse } from "axios"

import AsyncStorage from "@react-native-async-storage/async-storage"
import { tagTypesList } from "../interface/tag_types"

interface BaseQueryArgs extends AxiosRequestConfig {
    url: string,
    method?: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    body?: any,
    headers?: Record<string, string>
}

const baseQueryWithRath: BaseQueryFn<BaseQueryArgs, unknown, unknown> = async (
    args,
    api,
    extraOptions
) => {
    let access_token = await AsyncStorage.getItem("access_token");
    const refresh_token = await AsyncStorage.getItem("refresh_token");
    try {

        const result: AxiosResponse = await axios({
            baseURL: "http://10.10.10.63:8000",
            ...args,
            url: args.url,
            method: args.method,
            data: args.body,
            headers: {
                ...args.headers,
                Authorization: access_token ? `Bearer ${access_token}` : ""
            }
        })

        return { data: result.data }

    }
    catch (err) {
        const error = err as any;
        console.log("========= base api error ============ ", error)
        // NO RESPONSE = NETWORK ERROR
        if (!error.response) {
            return {
                error: {
                    status: 0,
                    message: "Network error: Backend unreachable",
                    data: null
                }
            };
        }
        if (error.response?.status === 401 && refresh_token) {
            try {
                const refreshResponse = await axios.post(
                    "http://10.10.10.63:8000/token/refresh",
                    { refresh_token }
                )
                console.log("========= refreshResponse ============ ", refreshResponse)

                access_token = refreshResponse.data.data.access_token;

                console.log("========= access_token ============ ", access_token)
                await AsyncStorage.setItem("access_token", access_token!)

                const retryResult = await axios({
                    baseURL: "http://10.10.10.63:8000",
                    ...args,
                    headers: {
                        ...args.headers,
                        Authorization: `Bearer ${access_token}`
                    }
                })

                return { data: retryResult.data }

            }
            catch {
                AsyncStorage.removeItem("access_token")
                AsyncStorage.removeItem("refresh_token")
                return { error: { status: 401, message: "Unauthorized error", data: null } };
            }
        }
        console.log("========= base api error ============ ", error)
        AsyncStorage.removeItem("access_token")
        AsyncStorage.removeItem("refresh_token")
        return {

            error: {
                status: error.response?.status ?? 500,
                message: error.response?.message ?? "Internet server error",
                data: error.response?.data ?? null
            }
        }
    }
}


export const api = createApi({
    keepUnusedDataFor: 0,
    reducerPath: "api",
    baseQuery: baseQueryWithRath,
    endpoints: ()=>({}),
    tagTypes: tagTypesList
})