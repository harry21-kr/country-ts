import { useSuspenseQuery } from "@tanstack/react-query";
import { Suspense } from "react";
import api from "../../api/api";
import CountryItem, { CountryItemSkeleton } from "./CountryItem";

const CountryList = () => {
  const { data: countryList } = useSuspenseQuery({
    queryKey: ["countryList"],
    queryFn: () => api.country.getAllCountry(),
  });

  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      <Suspense
        fallback={countryList.map((_, i) => (
          <CountryItemSkeleton key={i} />
        ))}
      >
        {countryList.map((country) => (
          <CountryItem key={country.name.common} country={country} />
        ))}
      </Suspense>
    </ul>
  );
};

export default CountryList;
