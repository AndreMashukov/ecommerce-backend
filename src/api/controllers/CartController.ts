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
import {
  GetCartItemsQuery,
  GetCartProductQuery,
  AddProductBody,
  DeleteItemBody
} from './requests';
import { CartPostResponse } from './responses';

@JsonController('/cart')
export class CartController {
  constructor(
    private cartService: CartService,
    private cartViewService: CartViewService
  ) {}

  @Get('/')
  public getCartItems(
    @QueryParams() { sessionId }: GetCartItemsQuery
  ): Promise<CartItem[] | undefined> {
    return this.cartViewService.findBySessionId(sessionId);
  }

  @Get('/product')
  public findBySessionIdAndProductId(
    @QueryParams() { sessionId, productId }: GetCartProductQuery
  ): Promise<CartItem | undefined> {
    return this.cartService.findBySessionIdAndProductId(
      sessionId,
      productId
    );
  }

  @Post('/product')
  @ResponseSchema(CartPostResponse)
  public addProduct(
    @Body() {
      sessionId,
      blockId,
      productId,
      price,
      currency,
      quantity,
      detailPageUrl,
      picture
     }: AddProductBody
  ): Promise<CartItem | undefined> {
    const cartItem = new CartItem();
    cartItem.sessionId = sessionId;
    cartItem.blockId = blockId;
    cartItem.productId = productId;
    cartItem.price = price;
    cartItem.currency = currency;
    cartItem.quantity = quantity;
    cartItem.detailPageUrl = detailPageUrl;
    cartItem.picture = picture;
    return this.cartService.addCartItem(cartItem);
  }

  @Post('/product/decrement')
  @ResponseSchema(CartPostResponse)
  public decrementQty(
    @Body() {
      sessionId,
      blockId,
      productId,
      price,
      currency,
      quantity
    }: AddProductBody
  ): Promise<CartItem | undefined> {
    const cartItem = new CartItem();
    cartItem.sessionId = sessionId;
    cartItem.blockId = blockId;
    cartItem.productId = productId;
    cartItem.price = price;
    cartItem.currency = currency;
    cartItem.quantity = quantity;
    return this.cartService.decrementQty(cartItem);
  }

  @Delete('/product')
  public deleteProduct(@Body() body: DeleteItemBody): Promise<void> {
    return this.cartService.delete(body.sessionId, body.productId);
  }
}
