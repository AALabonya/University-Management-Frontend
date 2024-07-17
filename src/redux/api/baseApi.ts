import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api/v1",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      // if backend  set barer then i use this way
      // headers.set("authorization", `barer ${token}`);
      headers.set("authorization", `${token}`);
    }
    return headers;
  },
});

const BaseQueryWithRefreshToken = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result.error?.status === 401) {
    console.log("Sending refresh token");

    const res = await fetch("http://localhost:5000/api/v1/auth/refresh-token", {
      method: "POST",
      credentials: "include",
    });
    const data = await res.json();
  }
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseQueryWithRefreshToken,
  endpoints: () => ({}),
});
