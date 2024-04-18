
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class SharedService {

     readonly APIUrl = 'http://192.168.1.8/ErpAPIs/public/api/';

     constructor(private http: HttpClient) {}

    login(data:any):Observable<any[]> {
        return this.http.post<any>(this.APIUrl+'LoginFunc', data);
    }

}
