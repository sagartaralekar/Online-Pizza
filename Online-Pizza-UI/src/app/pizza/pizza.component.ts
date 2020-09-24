import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Input } from '@angular/core';
import { ITopping } from '../Module/Topping';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'pizza-creater',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
  @Input()
  Pizza: FormGroup;

  toppings: ITopping[];
  Price: number;
  constructor() { 
    this.Price = 0;
  }

  ngOnInit() {
  }

  getMyStyles(i) {
    const myStyles = {
       'transform':  this.translate(i),
    };
    return myStyles;
}


  translate (i) {
    const x =  -30 + Math.round((50 * Math.cos(i * (2 * Math.PI / 15)))) + 'px';
    const y =   20 + Math.round((26 * Math.sin(i * (2 * Math.PI / 15)))) + 'px';
      const val = `translate(${x}, ${y})`;
      return val;
  }

  GetTotalPrice()
  {
    let toppingSum: number = 0;
    if(this.Pizza.value.toppings.length>0)
    {
      toppingSum= this.Pizza.value.toppings.map(a => a.price).reduce(function(a, b)
      {
        return a + b;
      });
    }
    toppingSum +=this.Pizza.value.size.price;
    return toppingSum;
  }

}
