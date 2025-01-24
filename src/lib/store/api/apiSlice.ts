import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.mail.tm',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getDomains: builder.query({
      query: () => '/domains',
    }),
    createAccount: builder.mutation({
      query: (credentials) => ({
        url: '/accounts',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: (credentials) => ({
        url: '/token',
        method: 'POST',
        body: credentials,
      }),
    }),
    getMessages: builder.query({
      query: () => '/messages',
    }),
    getMessage: builder.query({
      query: (id) => `/messages/${id}`,
    }),
  }),
});