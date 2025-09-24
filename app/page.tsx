"use client";

import { useEffect, useState } from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import TrendingListItem from "./components/TrendingListItem/TrendingListItem";

export default function Home() {
  const [stuff1, setStuff1] = useState<any>([]); // TODO: rename
  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch("/api/companies"); // TODO: use rtk query
      const data2 = await data.json();
      setStuff1(data2);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  return (
    <main>
      <PageTitle>Trending companies</PageTitle>
      {stuff1.data && stuff1.data.length > 0 ? (
        <section 
          role="list" 
          aria-label="List of trending companies"
        >
          {stuff1.data.map((company: any) => (
            <TrendingListItem key={company.companyId} companyInfo={company} />
          ))}
        </section>
      ) : (
        <div role="status" aria-live="polite">
          {stuff1.data ? "No companies found" : "Loading companies..."}
        </div>
      )}
    </main>
  );
}
