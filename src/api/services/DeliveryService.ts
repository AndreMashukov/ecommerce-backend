import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Delivery } from '../models/Delivery';
import { DeliveryRepository } from '../repositories/DeliveryRepository';

@Service()
export class DeliveryService {
  constructor(
    @OrmRepository() private deliveryRepository: DeliveryRepository
  ) {}

  public findManyByRegionIdAndOrderPrice(regionId: number, orderPrice: number): Promise<Delivery[]> {
    return this.deliveryRepository
      .createQueryBuilder('delivery')
      .select()
      .where(`JSON_SEARCH(regions->>"$.values",'one',${regionId}) is not null`)
      .andWhere(`order_price_from <= ${orderPrice}`)
      .andWhere(`order_price_to > ${orderPrice}`)
      .andWhere(`active = 'Y'`)
      .execute();
  }
}
