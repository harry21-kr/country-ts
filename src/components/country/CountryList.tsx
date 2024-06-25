import { useSuspenseQuery } from "@tanstack/react-query";
import api from "../../api/api";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const { data: countryList } = useSuspenseQuery({
    queryKey: ["countryList"],
    queryFn: () => api.country.getAllCountry(),
  });

  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {countryList.map((country) => (
        <CountryItem key={country.name.common} country={country} />
      ))}
    </ul>
  );
};

export default CountryList;
