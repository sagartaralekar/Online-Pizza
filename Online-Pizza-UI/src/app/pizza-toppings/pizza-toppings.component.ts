import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input, Output, EventEmitter } from '@angular/core';
import { PizzaComponent } from '../pizza/pizza.component';
import { ToppingDetailsService } from '../Service/topping-details.service';
import { ITopping } from '../Module/Topping';
import { FormArray } from '@angular/forms';

@Component({
  selector: 'app-pizza-toppings',
  templateUrl: './pizza-toppings.component.html',
  styleUrls: ['./pizza-toppings.component.css']
})
export class PizzaToppingsComponent implements OnInit {

  
  @Input()
  pizzas: FormArray;

  @Output()
  addTopping = new EventEmitter<any>();
  
  // @ViewChild('pizza', {read: ViewContainerRef}) pizza: ViewContainerRef;
  
  public toppings= [];
  constructor(private _toppingService: ToppingDetailsService) {
   }

   ngOnInit() {
     this._toppingService.getTopping()
     .subscribe(data => this.toppings = data);
   }

   selectToppings(topping) {
     this.addTopping.emit(topping);
   }

}
