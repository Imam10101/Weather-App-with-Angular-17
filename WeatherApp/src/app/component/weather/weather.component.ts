import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../../service/weather.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  searchForm! : FormGroup;
  weather : any;
  constructor(private fb:FormBuilder,
        private service:WeatherService
  ){}

  ngOnInit(){
   this.searchForm = this.fb.group({
     city: [null,Validators.required]
   })
  }

  searchWeather(){
   console.log(this.searchForm.value);
   this.service.searchWeatherByCity(this.searchForm.get(['city'])!.value).subscribe((resp) => {
     console.log(resp);
     this.weather = resp.data;
    
   })
}}


