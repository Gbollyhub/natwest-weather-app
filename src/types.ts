export type LocationOption = {
  id: number;
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  url: string;
};

export interface LocationSummary {
  city: string;
  country: string;
}
