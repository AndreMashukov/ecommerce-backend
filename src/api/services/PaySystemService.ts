import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { PaySystem } from '../models/PaySystem';
import { PaySystemRepository } from '../repositories/PaySystemRepository';

@Service()
export class PaySystemService {
  constructor(
    @OrmRepository() private paySystemRepository: PaySystemRepository
  ) {}

  public findManyByRegionId(
    regionId: number
  ): Promise<PaySystem[]> {
    return this.paySystemRepository
      .createQueryBuilder('pay_system')
      .select()
      .where(`regions->>'values' like '%${regionId}%'`)
      .andWhere(`active = 'Y'`)
      .execute();
  }
}
