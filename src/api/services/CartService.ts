import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Cart } from '../models/Cart';
import { CartRepository } from '../repositories/CartRepository';

@Service()
export class CartService {
  constructor(
    @OrmRepository() private cartRepository: CartRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public findByFuserId(_fuserId: number): Promise<Cart | undefined> {
    this.log.info('Find a Cart for fuser', _fuserId);
    return this.cartRepository.findOne({
      where: {
        fuserId: _fuserId,
      },
    });
  }
}
