import { useSuspenseQuery } from "@tanstack/react-query";
import { useState } from "react";
import api from "../../api/api";
import { CountryResponse } from "../../api/country.type";
import CountryItem from "./CountryItem";

const CountryList = () => {
  const { data: countryList } = useSuspenseQuery({
    queryKey: ["countryList"],
    queryFn: () => api.country.getAllCountry(),
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryResponse[]>([]);

  const handleSelectCountry = (newCountry: CountryResponse) => {
    const isSelectedCountry = selectedCountry.find(
      (prevCountry) => prevCountry.name.common === newCountry.name.common
    );

    if (isSelectedCountry) {
      setSelectedCountry(
        selectedCountry.filter(
          (prevCountry) => prevCountry.name.common !== newCountry.name.common
        )
      );
    } else {
      setSelectedCountry([...selectedCountry, newCountry]);
    }
  };

  return (
    <ul className="flex flex-wrap justify-center gap-4">
      {countryList.map((country) => (
        <CountryItem
          key={country.name.common}
          country={country}
          isSelectedCountry={
            !!selectedCountry.find(
              (prevCountry) => prevCountry.name.common === country.name.common
            )
          }
          handleSelectCountry={handleSelectCountry}
        />
      ))}
    </ul>
  );
};

export default CountryList;
