import { EntityRepository, Repository } from 'typeorm';
import { OrderStatus } from '../models';

@EntityRepository(OrderStatus)
export class OrderStatusRepository extends Repository<OrderStatus> {}
