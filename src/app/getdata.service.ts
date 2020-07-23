import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  constructor(private http :HttpClient) { }



  public getweather(str :string)
  {
    return(this.http.get('http://api.weatherstack.com/current?access_key=a50f0f7120f11acade30b82181caf03c&query='+str,{responseType: 'json'}));
  }
}
