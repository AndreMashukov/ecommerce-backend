import { IsNotEmpty, IsString } from 'class-validator';
import {
  Authorized,
  Body,
  Get,
  JsonController,
  Post,
  QueryParams
} from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import { Order, OrderProps } from '../models';
import { OrderService } from '../services/OrderService';
import moment from 'moment';
import { Roles } from '../../constants';

class GetOrderQuery {
  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  public userId: string;
}

class CreateOrderBody {
  @IsNotEmpty()
  public userId: string;

  @IsNotEmpty()
  public sessionId: string;

  @IsNotEmpty()
  public deliveryId: number;

  @IsNotEmpty()
  public paySystemId: number;

  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public props: OrderProps;

  @IsString()
  public comment: string;
}

export class OrderResponse {
  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  public userId: string;

  public props: OrderProps;
}

@Authorized([Roles.Customer, Roles.Admin])
@JsonController('/personal/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/list')
  @ResponseSchema(OrderResponse, { isArray: true })
  public find(): Promise<Order[]> {
    return this.orderService.find();
  }

  @Get()
  // @ResponseSchema(OrderResponse)
  public getByIdAndUserId(@QueryParams() query: GetOrderQuery): Promise<Order> {
    return this.orderService.findOneByIdAndUserId(query.id, query.userId);
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
    order.deliveryId = body.deliveryId;
    order.paySystemId = body.paySystemId;
    order.price = body.price;
    if (body.comment.length > 0) {
      order.comment = body.comment;
    }

    return this.orderService.create(order, body.sessionId);
  }
}
