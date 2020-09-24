import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { IPizzaOrderDetail } from '../Module/PizzaOrderDetail';

@Injectable({
  providedIn: 'root'
})
export class PlacePizzaOrderService {

  url: string="https://localhost:44348/api/OrderPizza";

  constructor(private http: HttpClient) { }

  postPizzaOrder(pizzaOrderDetail: IPizzaOrderDetail): Observable<any>
  {
    //console.error(pizzaOrderDetail);
    return  this.http.post<any>(this.url, pizzaOrderDetail).pipe(
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse)
  {
    console.error('An error occurred:', error.error);
    return Observable.throw(error.message || "Seerver error");
    
  }
}
