import { IsPositive } from 'class-validator';
import { Get, JsonController, QueryParams } from 'routing-controllers';

import { CartItem } from '../models/CartItem';
import { CartService } from '../services/CartService';

class GetCartQuery {
  @IsPositive()
  public fuserId: number;
}

@JsonController('/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get('/')
  public findByFuserId(@QueryParams() query: GetCartQuery): Promise<CartItem[] | undefined> {
      return this.cartService.findByFuserId(query.fuserId);
  }
}
