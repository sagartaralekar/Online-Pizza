import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  ITopping } from '../Module/Topping';
import { Observable } from 'rxjs';
import { catchError,map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToppingDetailsService {
  url: string="https://localhost:44348/api/PizzaTopping";

  toppings: string[];
  

  constructor(private http: HttpClient) { }

  getTopping(): Observable<ITopping[]>
  {
    return  this.http.get<ITopping[]>(this.url).pipe(
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse)
  {
    console.error('An error occurred:', error.error);
    return Observable.throw(error.message || "Seerver error");
    
  }
}
