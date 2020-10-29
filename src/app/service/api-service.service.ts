import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string = "https://abc:3030/";

  constructor(private http: HttpClient, public router: Router) {
  }
  addFoodItem(body:any) {
    return this.http.post(`${this.baseUrl}/addItem`, body);
  }
}
