import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey='a79124b501msh14ca8273f8d4ec5p10a2bdjsn5a62bc0cf5f4';
  private apiUrl="https://the-weather-api.p.rapidapi.com/api/weather";

  constructor(private http:HttpClient) { }

  searchWeatherByCity(city:string):Observable<any>{
    const headers = new HttpHeaders()
     .set("X-RapidAPI-Key",this.apiKey)
     .set("X-RapidAPI-Host","the-weather-api.p.rapidapi.com");

     const option={headers};

     return this.http.get(`${this.apiUrl}/${city}`,option)
  }
}
