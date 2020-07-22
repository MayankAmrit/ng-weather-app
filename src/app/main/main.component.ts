import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
search :string;
WeatherData: any;
image :string;
desc :string;
val :boolean;
  constructor() { }

  ngOnInit(): void {
   this.val=false;
  }

send()
{
  fetch('http://api.weatherstack.com/current?access_key=a50f0f7120f11acade30b82181caf03c&query=http://api.weatherstack.com/current?access_key=a50f0f7120f11acade30b82181caf03c&query='+this.search)
    .then(response=>response.json())
    .then(data=>{this.setWeatherData(data);})
}
  setWeatherData(data: any) {
    this.WeatherData = data;
    this.val=true;
    this.image= this .WeatherData.current.weather_icons[0];
    console.log(this.WeatherData.current.weather_descriptions[0]);
    this.desc=this.WeatherData.current.weather_descriptions[0];

  }



}
