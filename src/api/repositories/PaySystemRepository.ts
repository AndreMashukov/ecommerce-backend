import { EntityRepository, Repository } from 'typeorm';
import { PaySystem } from '../models';

@EntityRepository(PaySystem)
export class PaySystemRepository extends Repository<PaySystem> {}
