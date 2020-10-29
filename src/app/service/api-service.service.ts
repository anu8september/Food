import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseUrl: string = "abc/";

  constructor(private http: HttpClient, public router: Router) {
  }
  addFoodItem(body) {
    return this.http.post(`${this.baseUrl}/addItem`, body);
  }
}
