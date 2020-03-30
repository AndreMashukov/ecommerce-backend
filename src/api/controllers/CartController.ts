import { IsPositive, IsNotEmpty } from 'class-validator';
import { Delete, Get, JsonController, QueryParams, Post } from 'routing-controllers';

import { CartItem } from '../models/CartItem';
import { CartService } from '../services/CartService';

class GetCartItemsQuery {
  @IsPositive()
  public fuserId: number;
}

class GetCartProductQuery {
  @IsPositive()
  public fuserId: number;

  @IsPositive()
  public productId: number;
}

class AddProductBody {
  @IsPositive()
  public fuserId: number;

  @IsPositive()
  public productId: number;

  @IsPositive()
  @IsNotEmpty()
  public price: number;

  @IsPositive()
  @IsNotEmpty()
  public quantity: number;

  @IsNotEmpty()
  public currency: string;
}

@JsonController('/cart')
export class CartController {
  constructor(private cartService: CartService) {}

  @Get('/')
  public getCartItems(@QueryParams() query: GetCartItemsQuery): Promise<CartItem[] | undefined> {
      return this.cartService.findByFuserId(query.fuserId);
  }

  @Get('/product')
  public findProductByProductIdAndFuserId(@QueryParams() query:
  GetCartProductQuery): Promise<CartItem | undefined> {
      return this.cartService.findByFuserIdAndProductId(query.fuserId, query.productId);
  }

  @Post('/product')
  public addProduct(@QueryParams() query:
    AddProductBody): Promise<CartItem | undefined> {
      const cartItem = new CartItem();
      cartItem.fuserId = query.fuserId;
      cartItem.productId = query.productId;
      cartItem.price = query.price;
      cartItem.currency = query.currency;
      cartItem.quantity = query.quantity;
      return this.cartService.addCartItem(cartItem);
  }

  @Delete('/product')
  public deleteProduct(@QueryParams() query: GetCartProductQuery): Promise<void> {
    return this.cartService.delete(query.fuserId, query.productId);
  }
}
