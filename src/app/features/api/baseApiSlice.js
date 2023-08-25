import {
    createApi,
    fetchBaseQuery
} from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.unsplash.com",
});



export const baseApiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    tags: ["Images"],
    endpoints: (builder) => ({}),
});