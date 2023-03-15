import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {AuthDto} from "../../types/authDto";

const authApi = createApi({
    reducerPath: 'auth',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3001',
        credentials: "include",
    }),
    tagTypes: ['Auth'],
    endpoints(build) {
        return {
            signup: build.mutation<any,AuthDto>({
                query(signupDto: AuthDto) {
                    return {
                        url: '/auth/signup',
                        body: signupDto,
                        method: 'POST',
                    }
                }
            }),
            signin: build.mutation<any,AuthDto>({
                query(signinDto: AuthDto) {
                    return {
                        url: '/auth/signin',
                        body: signinDto,
                        method: 'POST',
                    }
                }
            }),
            signout: build.mutation<any,void>({
                query() {
                    return {
                        url: '/auth/signout',
                        method: 'POST',
                    }
                }
            })
        }
    }
})

export const { useSigninMutation, useSignupMutation, useSignoutMutation } = authApi;
export { authApi };
