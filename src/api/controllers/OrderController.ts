import {
  Authorized,
  Body,
  Get,
  JsonController,
  Post,
  QueryParams
} from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';
import moment from 'moment';

import { Order } from '../models';
import { OrderService } from '../services/OrderService';
import { Roles } from '../../constants';
import { GetOrderListQuery, CreateOrderBody, GetOrderQuery } from './requests';
import { OrderResponse } from './responses';

@Authorized([Roles.Admin, Roles.Customer])
@JsonController('/personal/orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/list')
  public async getByUserId(
    @QueryParams() { userId }: GetOrderListQuery
  ): Promise<{ orders: Order[] }> {
    const list = await this.orderService.findManyByUserId(userId);
    return { orders: list };
  }

  @Get()
  public getByIdAndUserId(
    @QueryParams() { id, userId }: GetOrderQuery
  ): Promise<Order> {
    return this.orderService.findOneByIdAndUserId(id, userId);
  }

  @Post()
  @ResponseSchema(OrderResponse)
  public create(@Body() {
    sessionId,
    userId,
    props,
    deliveryId,
    paySystemId,
    price,
    comment
  }: CreateOrderBody): Promise<Order> {
    const order = new Order();
    const currentDate = moment().format('YYYY-MM-DD HH:mm:ss');
    order.userId = userId;
    order.props = props;
    order.dateInsert = currentDate;
    order.dateStatus = currentDate;
    order.dateUpdate = currentDate;
    order.deliveryId = deliveryId;
    order.paySystemId = paySystemId;
    order.payed = 'N';
    order.statusId = 'N';
    order.price = price;
    if (comment.length > 0) {
      order.comment = comment;
    }

    return this.orderService.create(order, sessionId);
  }
}
