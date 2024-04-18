
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })

export class SharedService {

     readonly APIUrl = 'http://192.168.1.8/ErpAPIs/public/api/';

     constructor(private http: HttpClient) {}

    getObjectTypeList():Observable<any[]> {
        return this.http.get<any>(this.APIUrl+'GetObjectType');
    }

    createObjectType(data:any):Observable<any[]> {
        return this.http.post<any>(this.APIUrl+'CreateObjectType', data);
    }

    editObjectType(data:any):Observable<any[]> {
        return this.http.post<any>(this.APIUrl+'EditObjectType', data);
    }

    searchObjectType(data:any):Observable<any[]> {
        return this.http.post<any>(this.APIUrl+'SearchObjectType', data);
    }

    
    
}
