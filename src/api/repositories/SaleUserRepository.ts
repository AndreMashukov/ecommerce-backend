import { EntityRepository, Repository } from 'typeorm';

import { SaleUser } from '../models/SaleUser';

@EntityRepository(SaleUser)
export class SaleUserRepository extends Repository<SaleUser>  {

}
