import { EntityRepository, Repository } from 'typeorm';

import { CartViewItem } from '../models/CartViewItem';

@EntityRepository(CartViewItem)
export class CartViewRepository extends Repository<CartViewItem> {}
