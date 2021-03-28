import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Order } from '../models/Order';
import { OrderRepository } from '../repositories/OrderRepository';
import { CartRepository } from '../repositories/CartRepository';
import { DeleteResult } from 'typeorm';

@Service()
export class OrderService {
  public relations = ['cart', 'user', 'delivery', 'paySystem', 'orderStatus'];

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

  public findManyByUserId(
    userId: string
  ): Promise<Order[] | undefined> {
    return this.orderRepository.find({
      relations: this.relations,
      where: { userId },
      take: 10,
      order: { dateInsert: 'DESC' }
    });
  }

  public findLast100(): Promise<Order[] | undefined> {
    return this.orderRepository.find({
      relations: this.relations,
      take: 100,
      order: { dateInsert: 'DESC' }
    });
  }

  public findOneByIdAndUserId(
    id: number,
    userId: string
  ): Promise<Order | undefined> {
    return this.orderRepository.findOne({
      relations: this.relations,
      where: { id, userId }
    });
  }

  public async clearPreviousOrders(userId: string): Promise<DeleteResult> {
    return this.orderRepository.clearPreviousOrders(userId);
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
