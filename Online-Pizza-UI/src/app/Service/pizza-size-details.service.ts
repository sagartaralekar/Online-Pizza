import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IPizzaSize } from '../Module/PizzaSize';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PizzaSizeDetailsService {

  url: string="https://localhost:44348/api/PizzaSize";

  constructor(private http: HttpClient) { }

  getPizzaSize(): Observable<IPizzaSize[]>
  {
    return  this.http.get<IPizzaSize[]>(this.url).pipe(
      catchError(this.handleError));
  }

  handleError(error: HttpErrorResponse)
  {
    console.error('An error occurred:', error.error);
    return Observable.throw(error.message || "Seerver error");
    
  }
}
