import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';
import { CartRepository } from '../repositories/CartRepository';

@Service()
export class OrderService {
  constructor(
    @OrmRepository() private orderRepository: OrderRepository,
    @OrmRepository() private cartRepository: CartRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<Order[]> {
    return this.orderRepository.find();
  }

  public findOne(id: number): Promise<Order | undefined> {
    return this.orderRepository.findOne({ id });
  }

  public findOneByIdAndUserId(
    id: number,
    userId: string
  ): Promise<Order | undefined> {
    return this.orderRepository.findOne({
      relations: ['cart', 'user'],
      where: { id, userId }
    });
  }

  public async create(order: Order, sessionId: string): Promise<Order> {
    const newOrder = await this.orderRepository.save(order);
    this.log.info('Creating new order => ', newOrder.id);
    await this.cartRepository.update(
      { sessionId },
      { orderId: newOrder.id }
    );
    return newOrder;
  }
}
