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

  public findBySessionId(sessionId: string): Promise<CartItem[] | undefined> {
    return this.cartRepository.find({
      where: {
        sessionId
      }
    });
  }

  public findBySessionIdAndProductId(
    sessionId: string,
    productId: number
  ): Promise<CartItem | undefined> {
    return this.cartRepository.findOne({
      where: {
        sessionId,
        productId
      }
    });
  }

  public async addCartItem(_item: CartItem): Promise<CartItem | undefined> {
    const resp = await this.cartRepository.findOne({
      where: {
        sessionId: _item.sessionId,
        productId: _item.productId
      }
    });

    if (!resp) {
      return this.cartRepository.save(_item);
    } else {
      const currentItem = _item;
      currentItem.id = resp.id;
      currentItem.quantity = resp.quantity + 1;

      try {
        return this.cartRepository.save(currentItem);
      } catch (err) {
        this.log.info('Error updating cart', err);
        return new Promise((_resolve) => _resolve(undefined));
      }
    }
  }

  public async decrementQty(_item: CartItem): Promise<CartItem | undefined> {
    const resp = await this.cartRepository.findOne({
      where: {
        sessionId: _item.sessionId,
        productId: _item.productId
      }
    });

    if (!resp) {
      return new Promise((_resolve) => _resolve(undefined));
    } else {
      const currentItem = _item;
      currentItem.id = resp.id;
      if (resp.quantity > 1) {
        currentItem.quantity = resp.quantity - 1;
      } else {
        return new Promise((_resolve) => _resolve(undefined));
      }

      try {
        return this.cartRepository.save(currentItem);
      } catch (err) {
        this.log.info('Error updating cart', err);
        return new Promise((_resolve) => _resolve(undefined));
      }
    }
  }

  public delete(sessionId: string, productId: number): Promise<any> {
    return this.cartRepository.delete({
      sessionId,
      productId
    });
  }
}
