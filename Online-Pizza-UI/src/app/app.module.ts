import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaComponent } from './pizza/pizza.component';
import { PizzaToppingsComponent } from './pizza-toppings/pizza-toppings.component';
import {HttpClientModule} from '@angular/common/http'
import { ToppingDetailsService } from './Service/topping-details.service';
import { UserComponent } from './user/user.component';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PizzaViewerComponent } from './pizza-viewer/pizza-viewer.component';
import { PizzaSizeDetailsService } from './Service/pizza-size-details.service';
import { PlacePizzaOrderService } from './Service/place-pizza-order.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzaComponent,
    PizzaToppingsComponent,
    UserComponent,
    PizzaViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ToppingDetailsService,PizzaSizeDetailsService,PlacePizzaOrderService],
  bootstrap: [AppComponent],
  entryComponents: [PizzaComponent]
})
export class AppModule { }
