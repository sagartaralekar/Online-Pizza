import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { FormBuilder, Validators, FormArray } from '@angular/forms';
import { ITopping } from './Module/Topping';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaSizeDetailsService } from './Service/pizza-size-details.service';
import { IPizzaSize } from './Module/PizzaSize';
import { forEach } from '@angular/router/src/utils/collection';
import { PlacePizzaOrderService } from './Service/place-pizza-order.service';
import { IPizzaOrderDetail } from './Module/PizzaOrderDetail';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form = this.fb.group({
    details: this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      confirm: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(3)]],
      postcode: ['', [Validators.required, Validators.minLength(3)]]
    }),
    pizzas: this.fb.array([
      //this.createPizza()
    ])
  });

  prices = {
    small: { base: 9.99, toppings: 0.69 },
    medium: { base: 12.99, toppings: 0.99 },
    large: { base: 16.99, toppings: 1.29 }
  };

  totalPrize = 0;
  selectedToppings: ITopping[];
  public pizzaSizes= [];
  private smallPizza: IPizzaSize;

  
  
  // @ViewChild('pizza', {read: ViewContainerRef}) pizza: ViewContainerRef;
  constructor(private fb: FormBuilder, private resolver: ComponentFactoryResolver,
    private _pizzaSizeService: PizzaSizeDetailsService,
    private _placePizzaOrderService : PlacePizzaOrderService ) { }

  ngOnInit() {
    // this.calculateTotal(this.form.get('pizzas').value);
    // this.form.get('pizzas')
    //   .valueChanges
    //   .subscribe(value => this.calculateTotal(value));

      this._pizzaSizeService.getPizzaSize()
      .subscribe(data =>  {
        this.pizzaSizes = data
      });
  }

  getPizza()
  {
    return this.form.get('pizzas')  as FormArray;
  }

  calculateTotal() {

    const control = this.form.get('pizzas') as FormArray;

    const price = control.controls.map(a => a).reduce((prev: number, next: any) => {
      const basePrize = next.value.size.price;
      let toppingSum: number = 0;
        if(next.value.toppings.length>0)
        {
          toppingSum= next.value.toppings.map(a => a.price).reduce(function(a, b)
          {
            return a + b;
          });
        }
       let totalPrizeForPizza =basePrize +toppingSum + prev;
      return totalPrizeForPizza;
    }, 0);
    
    this.totalPrize = price; 
    
    console.log("Total ="+this.totalPrize);
  }

  title = 'Online-Pizza';

  createPizza(pizzaSize: IPizzaSize) {
    return this.fb.group({
      size: [pizzaSize, Validators.required],
      toppings: [[]]
    });
  }

  addPizza(pizzaSizeSelected: string) {
    let pizzaSize = this.pizzaSizes.find(size=>size.name==pizzaSizeSelected);

    const control = this.form.get('pizzas') as FormArray;
    control.push(this.createPizza(pizzaSize));

    this.calculateTotal();
  }
  
  addToppings(topping) {
    const control = this.form.get('pizzas') as FormArray;
    let currentPizzaIndex = control.length-1;
    if (control.controls[currentPizzaIndex].value.toppings.indexOf(topping) === -1) {
      control.controls[currentPizzaIndex].value.toppings.push(topping);
    }
    else {
      control.controls[currentPizzaIndex].value.toppings.splice(control.controls[currentPizzaIndex].value.toppings.indexOf(topping), 1);
     }

     this.calculateTotal();
  }

  removePizza(index: number)
  {
    const control = this.form.get('pizzas') as FormArray;
    control.removeAt(index);

    this.calculateTotal();
  }

  onSubmit()
  {
    console.log("order details=");
    console.log(this.form.value);
    let pizzaInfo = [];

    
    let pizzaOrder: IPizzaOrderDetail= {
      Id:"",
      UserDetail:{ Id:0,
        Name :this.form.value.details.name,
        Email :this.form.value.details.email,
       Phone :this.form.value.details.phone,
        Address :this.form.value.details.address,
       Postcode :this.form.value.details.postcode},
       PizzaDetailInfo: [],
       Price : this.totalPrize
    }

    this.form.value.pizzas.forEach(function(item){  
      pizzaOrder.PizzaDetailInfo.push({
        id:0,
        Size:item.size,
        Toppings: item.toppings
      });
    }); 
    //console.error(pizzaOrder);
    this._placePizzaOrderService.postPizzaOrder(pizzaOrder).subscribe(data => {
      console.log( data.id);
  })
  }
}
