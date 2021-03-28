import { DeleteResult, EntityRepository, Repository } from 'typeorm';
import { Order } from '../models/Order';

@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
  public clearPreviousOrders(userId: string): Promise<DeleteResult> {
    return this.createQueryBuilder()
      .delete()
      .from('b_sale_order')
      .where(`user_id = ${userId}`)
      .execute();
  }
}
