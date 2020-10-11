import { IsPositive, IsNotEmpty } from 'class-validator';

export class CartPostResponse {
  @IsNotEmpty()
  public sessionId: string;

  @IsNotEmpty()
  public productId: number;

  @IsNotEmpty()
  public blockId: number;

  @IsPositive()
  public price: number;

  @IsNotEmpty()
  public currency: string;

  @IsPositive()
  public quantity: number;
}
