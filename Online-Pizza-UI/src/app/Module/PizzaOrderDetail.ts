import { IUserDetail } from './UserDetail';
import { IPizzaSize } from './PizzaSize';
import { IPizza } from './Pizza';

export interface IPizzaOrderDetail
{
    Id:string,
    UserDetail:IUserDetail,
    Price: number,
    PizzaDetailInfo: any[]
}