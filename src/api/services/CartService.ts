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

  public findByFuserIdAndProductId(_fuserId: number, _productId: number): Promise<CartItem | undefined> {
    return this.cartRepository.findOne({
      where: {
        fuserId: _fuserId,
        productId: _productId,
      },
    });
  }

  public async addCartItem(_item: CartItem): Promise<CartItem | undefined> {
    const resp = await this.cartRepository.findOne({
      where: {
        fuserId: _item.fuserId,
        productId: _item.productId,
      },
    });
    // console.log(resp);
    if (!resp) {
      return this.cartRepository.save(_item);
    } else {
      return new Promise(_resolve => _resolve(resp));
    }
  }

  public delete(_fuserId: number, _productId: number): Promise<any> {
    return this.cartRepository.delete({
      fuserId: _fuserId,
      productId: _productId,
    });
  }
}
