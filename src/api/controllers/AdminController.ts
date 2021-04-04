import { Authorized, Get, JsonController } from 'routing-controllers';
import { Order } from '../models/Order';
import { OrderService } from '../services/OrderService';
import { Roles } from '../../constants';

@Authorized([Roles.Admin])
@JsonController('/admin')
export class AdminController {
  constructor(private orderService: OrderService) {}

  @Get('/orders/list')
  public async getLast100(): Promise<{ orders: Order[] }> {
    const list = await this.orderService.findLast100();
    return { orders: list };
  }
}
