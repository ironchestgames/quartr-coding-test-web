import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { CompanyInfo } from "../types";

type CompaniesResponse = {
  data: CompanyInfo[];
};

export const companiesApi = createApi({
  reducerPath: "companiesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getCompanies: builder.query<CompaniesResponse, void>({
      query: () => "companies",
    }),
  }),
});

export const { useGetCompaniesQuery } = companiesApi;
