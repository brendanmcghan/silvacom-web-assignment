export interface Weather {
  lat: string;
  lon: string;
  timezone: string;
  timezone_offset: string;
  current: {
    dt: string;
    sunrise: string;
    sunset: string;
    temp: string;
    feels_like: string;
    pressure: string;
    humidity: string;
    dew_point: string;
    uvi: string;
    clouds: string;
    visibility: string;
    wind_speed: string;
    wind_deg: string;
    weather:
      {
        id: string;
        main: string;
        description: string;
        icon: string;
      }
    }
}
