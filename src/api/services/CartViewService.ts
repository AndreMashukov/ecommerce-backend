import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CartViewItem } from '../models/CartViewItem';
import { CartViewRepository } from '../repositories/CartViewRepository';

@Service()
export class CartViewService {
  constructor(
    @OrmRepository() private cartViewRepository: CartViewRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public findByFuserId(_fuserId: number): Promise<CartViewItem[] | undefined> {
    this.log.info('Find a Cart Items for session', _fuserId);
    return this.cartViewRepository.find({
      where: {
        fuserId: _fuserId,
      },
    });
  }
}
