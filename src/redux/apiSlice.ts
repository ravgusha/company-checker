import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://suggestions.dadata.ru', prepareHeaders: (headers) => {

            const token = process.env.REACT_APP_TOKEN;
            if (token) {
                headers.set('Content-Type', 'application/json')
                headers.set('Authorization', `Token ${token}`)
                headers.set('Accept', `application/json`)
            }
            return headers
        },
    }),
    tagTypes: ['Companies'],
    endpoints: (builder) => ({
        getCompanyInfo: builder.mutation({
            query: (company) => ({
                url: '/suggestions/api/4_1/rs/findById/party',
                method: 'POST',
                body: JSON.stringify({ query: company }),
            }),
            invalidatesTags: ['Companies'],
        }),
    }),
});

export const {
    useGetCompanyInfoMutation
} = apiSlice;
