import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { CartViewItem } from '../models/CartViewItem';
import { CartViewRepository } from '../repositories/CartViewRepository';

@Service()
export class CartViewService {
  constructor(
    @OrmRepository() private cartViewRepository: CartViewRepository
  ) {}

  public findBySessionId(
    sessionId: string
  ): Promise<CartViewItem[] | undefined> {
    return this.cartViewRepository.find({
      where: {
        sessionId
      }
    });
  }
}
