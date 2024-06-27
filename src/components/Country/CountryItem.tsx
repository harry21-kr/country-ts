import { useSuspenseQuery } from "@tanstack/react-query";
import { CountryResponse } from "../../api/country.type";
import { fetchImage } from "../../utils";

interface CountryItemProps {
  country: CountryResponse;
  isSelectedCountry: boolean;
  handleSelectCountry: (newCountry: CountryResponse) => void;
}

const CountryItem: React.FC<CountryItemProps> = ({
  country,
  isSelectedCountry,
  handleSelectCountry,
}) => {
  const { data: imageUrl } = useSuspenseQuery({
    queryKey: ["img", country.flags.png],
    queryFn: () => fetchImage(country.flags.png),
    select: (data) => URL.createObjectURL(data),
  });

  return (
    <li
      className={`${isSelectedCountry && "bg-green-300"} flex max-h-[300px] min-w-[292px] cursor-pointer flex-col items-center gap-1 rounded border p-4 shadow-md transition hover:scale-110 hover:border-green-300`}
      onClick={() => handleSelectCountry(country)}
    >
      <img src={imageUrl} className="h-[180px] w-full max-w-[260px]" />
      <h2 className="text-lg font-bold">{country.translations.kor.common}</h2>
      <h3>{country.name.common}</h3>
    </li>
  );
};

export default CountryItem;
