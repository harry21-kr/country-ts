import { useSuspenseQuery } from "@tanstack/react-query";
import axios from "axios";
import { CountryResponse } from "../../api/country.type";

const fetchImage = async (url: string) => {
  try {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw new Error("이미지 불러오기 실패");
  }
};

export const CountryItemSkeleton: React.FC = () => {
  return (
    <div className="flex h-[260px] w-[292px] animate-pulse flex-col items-center rounded bg-gray-300 p-4 shadow-md" />
  );
};

interface CountryItemProps {
  country: CountryResponse;
}

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  const { data: imageUrl } = useSuspenseQuery({
    queryKey: ["img", country.flags.png],
    queryFn: () => fetchImage(country.flags.png),
    select: (data) => URL.createObjectURL(data),
  });

  return (
    <li className="flex h-[260px] w-[292px] flex-col items-center rounded border p-4 shadow-md">
      <img src={imageUrl} className="h-[180px] w-full max-w-[260px]" />
      <h2>{country.name.common}</h2>
      <h3>{country.capital}</h3>
    </li>
  );
};

export default CountryItem;
