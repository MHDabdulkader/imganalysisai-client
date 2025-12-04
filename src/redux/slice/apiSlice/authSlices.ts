import { api } from "../../api/baseApi";
import { tagTypes } from "../../interface/tag_types";

const authSlice = api.injectEndpoints({
    endpoints: (builder)=>({
        login: builder.mutation<any, any>({
            query: (requestBody)=>({
                url: `/users/login`,
                body: requestBody,
                method: "POST",

            }),
            invalidatesTags:[tagTypes.users]
        }),
        register: builder.mutation<any, any>({
            query: (requestBody)=>({
                url: `/users/register`,
                body: requestBody,
                method: "POST"
            }),
            invalidatesTags:[tagTypes.users]
        })
    }),
    overrideExisting: true
})


export const {
    useLoginMutation,
    useRegisterMutation
} = authSlice;