import axios from "axios";

export const fetchImage = async (url: string) => {
  try {
    const response = await axios.get(url, {
      responseType: "blob",
    });
    return response.data;
  } catch (error) {
    throw new Error("이미지 불러오기 실패");
  }
};
