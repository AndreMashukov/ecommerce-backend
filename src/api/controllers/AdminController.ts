import { IsNotEmpty } from 'class-validator';
import {
  Authorized,
  Get,
  Post,
  JsonController,
  Body
} from 'routing-controllers';
import { Order } from '../models/Order';
import { OrderService } from '../services/OrderService';
import { SessionService } from '../services/SessionService';
import { Roles } from '../../constants';
import { DeleteResult } from 'typeorm';

class PostBody {
  @IsNotEmpty()
  public id: string;
}

@Authorized([Roles.Admin])
@JsonController('/admin')
export class AdminController {
  constructor(private orderService: OrderService, private sessionService: SessionService) {}

  @Get('/orders/list')
  public async getLast100(): Promise<{orders: Order[]}> {
    const list = await this.orderService.findLast100();
    return {orders: list};
  }

  @Post('/test/prepare')
  public async prepareForTest(
    @Body() body: PostBody
  ): Promise<DeleteResult> {
    console.log('body', body);
    return this.sessionService.clearOldSessions();
  }
}
