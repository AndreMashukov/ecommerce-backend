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

  public find(): Promise<CartItem[]> {
    return this.cartRepository.find();
  }

  public findBySessionId(_sessionId: string):
    Promise<CartItem[] | undefined> {
    this.log.info('Find a Cart Items for session', _sessionId);
    return this.cartRepository.find({
      where: {
        sessionId: _sessionId,
      },
    });
  }

  public findBySessionIdAndProductId(_sessionId: string, _productId: number):
    Promise<CartItem | undefined> {
    return this.cartRepository.findOne({
      where: {
        sessionId: _sessionId,
        productId: _productId,
      },
    });
  }

  public async addCartItem(_item: CartItem): Promise<CartItem | undefined> {
    const resp = await this.cartRepository.findOne({
      where: {
        sessionId: _item.sessionId,
        productId: _item.productId,
      },
    });

    if (!resp) {
      return this.cartRepository.save(_item);
    } else {
      return new Promise(_resolve => _resolve(resp));
    }
  }

  public delete(_sessionId: string, _productId: number): Promise<any> {
    return this.cartRepository.delete({
      sessionId: _sessionId,
      productId: _productId,
    });
  }
}
