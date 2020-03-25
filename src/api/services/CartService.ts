import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { CartItem } from '../models/CartItem';
import { CartRepository } from '../repositories/CartRepository';

@Service()
export class CartService {
  constructor(
    @OrmRepository() private cartRepository: CartRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public findByFuserId(_fuserId: number): Promise<CartItem[] | undefined> {
    this.log.info('Find a Cart Items for session', _fuserId);
    return this.cartRepository.find({
      where: {
        fuserId: _fuserId,
      },
    });
  }
}
