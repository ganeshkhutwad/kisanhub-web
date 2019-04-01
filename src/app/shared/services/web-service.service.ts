import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebServiceService {

  constructor(private http:HttpClient) { }

  getService(url: string) {
    return this.http.get(url);
  }
}
