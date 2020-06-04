import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';

@Service()
export class OrderService {
  constructor(
    @OrmRepository() private orderRepository: OrderRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  public findOne(_id: number): Promise<Order | undefined> {
    return this.orderRepository.findOne({ id: _id });
  }

  public async create(_order: Order): Promise<Order> {
    this.log.info('Creating new order => ', _order.id);
    const newOrder = await this.orderRepository.save(_order);
    return newOrder;
  }
}
