"use client";

import { useGetCompaniesQuery } from "./api/companiesApi";
import CompanyListItem from "./components/CompanyListItem/CompanyListItem";
import PageTitle from "./components/PageTitle/PageTitle";

export default function Home() {
  const {
    data: companiesResponse,
    isLoading,
    isError,
  } = useGetCompaniesQuery();

  if (isLoading) {
    return (
      <main>
        <PageTitle>Trending companies</PageTitle>
        <div role="status" aria-live="polite">
          Loading companies...
        </div>
      </main>
    );
  }

  if (
    isError ||
    !companiesResponse?.data ||
    companiesResponse?.data.length === 0
  ) {
    return (
      <main>
        <PageTitle>Trending companies</PageTitle>
        <div role="alert" aria-live="assertive">
          Error loading companies. Please try again later.
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageTitle>Trending companies</PageTitle>
      <section role="list" aria-label="List of trending companies">
        {companiesResponse.data.map((company) => (
          <CompanyListItem key={company.companyId} companyInfo={company} />
        ))}
      </section>
    </main>
  );
}
