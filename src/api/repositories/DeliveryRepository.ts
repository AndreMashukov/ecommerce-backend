import { EntityRepository, Repository } from 'typeorm';
import { Delivery } from '../models';

@EntityRepository(Delivery)
export class DeliveryRepository extends Repository<Delivery> {}
