import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DbaccService {
  data: Data[];
  myUrl: string =
    "http://localhost:8088/STPredavanja/HTTPServices/restAPI.php/resttable";

  constructor(private http: HttpClient) {
    this.data=[];
    this.http
      .get<Data[]>(this.myUrl)
      .subscribe((data) => {this.data = data;});
  }

  getData(): Observable<Data[]>{
    return this.http.get<Data[]>(this.myUrl);
  }
  testing() {console.log("Testing my service");}
}
