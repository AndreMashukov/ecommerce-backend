import { IsPositive, IsNotEmpty } from 'class-validator';

export class GetCartItemsQuery {
  @IsNotEmpty()
  public sessionId: string;
}

export class GetCartProductQuery {
  @IsNotEmpty()
  public sessionId: string;

  @IsPositive()
  public productId: number;
}

export class AddProductBody {
  @IsNotEmpty()
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

  @IsNotEmpty()
  public detailPageUrl: string;

  public picture: string;
}

export class DeleteItemBody {
  @IsNotEmpty()
  public sessionId: string;

  @IsPositive()
  public productId: number;
}
