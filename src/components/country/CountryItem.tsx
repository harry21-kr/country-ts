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

interface CountryItemProps {
  country: CountryResponse;
}

export const CountryItemSkeleton: React.FC = () => {
  return (
    <div className="w-[292px] h-[260px] flex flex-col items-center p-4 bg-gray-300 animate-pulse shadow-md rounded" />
  );
};

const CountryItem: React.FC<CountryItemProps> = ({ country }) => {
  const { data: imageUrl } = useSuspenseQuery({
    queryKey: ["img", country.flags.png],
    queryFn: () => fetchImage(country.flags.png),
    select: (data) => URL.createObjectURL(data),
  });

  return (
    <li className="w-[292px] h-[260px] flex flex-col items-center p-4 shadow-md rounded">
      <img src={imageUrl} className="w-full max-w-[260px] h-[180px]" />
      <h2>{country.name.common}</h2>
      <h3>{country.capital}</h3>
    </li>
  );
};

export default CountryItem;
