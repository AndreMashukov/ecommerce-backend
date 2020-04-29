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

  public findBySessionId(_sessionId: string): Promise<CartViewItem[] | undefined> {
    this.log.info('Find a Cart Items for session', _sessionId);
    return this.cartViewRepository.find({
      where: {
        sessionId: _sessionId,
      },
    });
  }
}
