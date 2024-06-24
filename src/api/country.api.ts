import { AxiosInstance, AxiosResponse } from "axios";
import { CountryResponse } from "./country.type";

class CountryAPI {
  private axios: AxiosInstance;

  constructor(axios: AxiosInstance) {
    this.axios = axios;
  }

  async getAllCountry() {
    const path = "/all";
    const res: AxiosResponse<CountryResponse[]> = await this.axios.get(path);
    return res.data;
  }
}

export default CountryAPI;
