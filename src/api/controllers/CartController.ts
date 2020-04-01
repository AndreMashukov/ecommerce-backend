import { IsPositive, IsNotEmpty } from 'class-validator';
import { Body, Delete, Get, JsonController, QueryParams, Post } from 'routing-controllers';

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
  public blockId: number;

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
  public addProduct(@Body() body:
    AddProductBody): Promise<CartItem | undefined> {
      const cartItem = new CartItem();
      cartItem.fuserId = body.fuserId;
      cartItem.blockId = body.blockId;
      cartItem.productId = body.productId;
      cartItem.price = body.price;
      cartItem.currency = body.currency;
      cartItem.quantity = body.quantity;
      return this.cartService.addCartItem(cartItem);
  }

  @Delete('/product')
  public deleteProduct(@QueryParams() query: GetCartProductQuery): Promise<void> {
    return this.cartService.delete(query.fuserId, query.productId);
  }
}
