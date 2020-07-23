import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

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
  constructor(private service: GetdataService) { }

  ngOnInit(): void {
   this.val=false;
  }

send()
{
  this.service.getweather(this.search).subscribe((data) =>{this.setWeatherData(data);});

}
  setWeatherData(data: any)
   {
    console.log(data);
    this.WeatherData = data;
    this.val=true;
    this.image= this .WeatherData.current.weather_icons[0];
    console.log(this.WeatherData.current.weather_descriptions[0]);
    this.desc=this.WeatherData.current.weather_descriptions[0];

  }



}
