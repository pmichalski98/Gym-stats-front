import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Auth, User } from "../../types/auth";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    credentials: "include",
  }),
  tagTypes: ["Auth", "Training"],
  endpoints(build) {
    return {
      signup: build.mutation<User, Auth>({
        query(signupDto: Auth) {
          return {
            url: "/auth/signup",
            body: signupDto,
            method: "POST",
          };
        },
      }),
      signin: build.mutation<User, Auth>({
        invalidatesTags: (result, error, training) => {
          return [{ type: "Auth" }, { type: "Training" }];
        },
        query(signinDto: Auth) {
          return {
            url: "/auth/signin",
            body: signinDto,
            method: "POST",
          };
        },
      }),
      signout: build.mutation<any, void>({
        query() {
          return {
            url: "/auth/signout",
            method: "POST",
          };
        },
      }),
    };
  },
});

export const { useSigninMutation, useSignupMutation, useSignoutMutation } =
  authApi;
export { authApi };
