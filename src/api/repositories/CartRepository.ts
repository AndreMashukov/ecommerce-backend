import { EntityRepository, Repository } from 'typeorm';

import { CartItem } from '../models/CartItem';

@EntityRepository(CartItem)
export class CartRepository extends Repository<CartItem> {}
