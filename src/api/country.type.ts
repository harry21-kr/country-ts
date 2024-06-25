export interface CountryResponse {
  capital: string;
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
  };
  translations: {
    kor: {
      official: string;
      common: string;
    };
  };
}
