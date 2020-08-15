import {
  Authorized,
  Get,
  JsonController
} from 'routing-controllers';
import { Order } from '../models';
import { OrderService } from '../services/OrderService';
import { Roles } from '../../constants';

@Authorized([`${Roles.Admin}`])
@JsonController('/admin/orders')
export class AdminOrderController {
  constructor(private orderService: OrderService) {}

  @Get('/list')
  public async getLast20(): Promise<{orders: Order[]}> {
    const list = await this.orderService.findLast100();
    return {orders: list};
  }
}
