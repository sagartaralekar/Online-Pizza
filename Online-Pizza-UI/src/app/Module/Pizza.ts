import { ITopping } from './Topping';
import { IPizzaSize } from './PizzaSize';

export interface IPizza
{
    Id:number,
    Size:string,
    Toppings: ITopping[]
    TotalCost:number,
    size: string,
    PizzaSize: IPizzaSize
}