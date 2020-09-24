import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormArray } from '@angular/forms';
import { PizzaSizeDetailsService } from '../Service/pizza-size-details.service';
import { IPizzaSize } from '../Module/PizzaSize';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-pizza-viewer',
  templateUrl: './pizza-viewer.component.html',
  styleUrls: ['./pizza-viewer.component.css']
})
export class PizzaViewerComponent implements OnInit {

  @Input()
  pizzas: FormArray;

  @Output()
  addPizza = new EventEmitter<any>();

  @Output()
  removePizza = new EventEmitter<any>();

  @Output()
  addTopping = new EventEmitter<any>();

  @Input()
  totalPrize: number;

  public pizzaSizes= [];

  pizzaSizeSelected: string;

  constructor(private _pizzaSizeService: PizzaSizeDetailsService ) {
    this.pizzaSizeSelected = 'small';
   }

  ngOnInit() {
    this._pizzaSizeService.getPizzaSize()
    .subscribe(data => {
      this.pizzaSizes = data
    });

  }

  createPizza() {

   this.addPizza.emit(this.pizzaSizeSelected);
   return false;
  }
  
  addToppings(topping) {
    this.addTopping.emit(topping);
  }

  removeSelectedPizza(index: number)
  {
    this.removePizza.emit(index);
  }

}
