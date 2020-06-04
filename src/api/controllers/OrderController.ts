import { IsNotEmpty } from 'class-validator';
import {
  Authorized,
  Body,
  Get,
  JsonController,
  Post
} from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import { Order } from '../models/Order';
import { OrderService } from '../services/OrderService';
import moment from 'moment';
import { Roles } from '../../constants';

class CreateOrderBody {
  @IsNotEmpty()
  public userId: string;

  @IsNotEmpty()
  public sessionId: string;

  public props: string;
}

export class OrderResponse {
  @IsNotEmpty()
  public id: string;

  @IsNotEmpty()
  public userId: string;

  public props: string;
}

@Authorized([Roles.Customer, Roles.Admin])
@JsonController('/personal/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get()
  @ResponseSchema(OrderResponse, { isArray: true })
  public find(): Promise<Order[]> {
    return this.orderService.find();
  }

  @Post()
  @ResponseSchema(OrderResponse)
  public create(@Body() body: CreateOrderBody): Promise<Order> {
    const order = new Order();
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    order.userId = body.userId;
    order.props = body.props;
    order.dateInsert = currentDate;
    order.dateStatus = currentDate;
    order.dateUpdate = currentDate;

    return this.orderService.create(order, body.sessionId);
  }
}
