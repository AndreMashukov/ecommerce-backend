import { IsPositive, IsNotEmpty } from 'class-validator';
import {
  Body,
  Delete,
  Get,
  JsonController,
  QueryParams,
  Post
} from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { CartItem } from '../models/CartItem';
import { CartService, CartViewService } from '../services';

export class CartPostResponse {
  @IsNotEmpty()
  public sessionId: string;

  @IsNotEmpty()
  public productId: number;

  @IsNotEmpty()
  public blockId: number;

  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public currency: string;

  @IsNotEmpty()
  public quantity: number;
}

class GetCartItemsQuery {
  @IsPositive()
  public sessionId: string;
}

class GetCartProductQuery {
  @IsPositive()
  public sessionId: string;

  @IsPositive()
  public productId: number;
}

class AddProductBody {
  @IsPositive()
  public sessionId: string;

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

class DeleteItemBody {
  @IsPositive()
  public sessionId: string;

  @IsPositive()
  public productId: number;
}

@JsonController('/cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private cartViewService: CartViewService
  ) {}

  @Get('/')
  public getCartItems(
    @QueryParams() query: GetCartItemsQuery
  ): Promise<CartItem[] | undefined> {
    return this.cartViewService.findBySessionId(query.sessionId);
  }

  @Get('/product')
  public findBySessionIdAndProductId(
    @QueryParams() query: GetCartProductQuery
  ): Promise<CartItem | undefined> {
    return this.cartService.findBySessionIdAndProductId(
      query.sessionId,
      query.productId
    );
  }

  @Post('/product')
  @ResponseSchema(CartPostResponse)
  public addProduct(
    @Body() body: AddProductBody
  ): Promise<CartItem | undefined> {
    const cartItem = new CartItem();
    cartItem.sessionId = body.sessionId;
    cartItem.blockId = body.blockId;
    cartItem.productId = body.productId;
    cartItem.price = body.price;
    cartItem.currency = body.currency;
    cartItem.quantity = body.quantity;
    return this.cartService.addCartItem(cartItem);
  }

  @Post('/product/decrement')
  @ResponseSchema(CartPostResponse)
  public decrementQty(
    @Body() body: AddProductBody
  ): Promise<CartItem | undefined> {
    const cartItem = new CartItem();
    cartItem.sessionId = body.sessionId;
    cartItem.blockId = body.blockId;
    cartItem.productId = body.productId;
    cartItem.price = body.price;
    cartItem.currency = body.currency;
    cartItem.quantity = body.quantity;
    return this.cartService.decrementQty(cartItem);
  }

  @Delete('/product')
  public deleteProduct(@Body() body: DeleteItemBody): Promise<void> {
    return this.cartService.delete(body.sessionId, body.productId);
  }
}
