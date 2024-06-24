import axios, { AxiosInstance } from "axios";
import CountryAPI from "./country.api";

const BASE_URL = "https://restcountries.com/v3.1";

class API {
  private axios: AxiosInstance;

  country;

  constructor() {
    this.axios = axios.create({ baseURL: BASE_URL });

    this.country = new CountryAPI(this.axios);
  }
}

const api = new API();

export default api;
