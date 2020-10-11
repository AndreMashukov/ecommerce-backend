import { IsNotEmpty, IsString } from 'class-validator';
import { OrderProps } from 'src/api/models';

export class GetOrderQuery {
  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  public userId: string;
}

export class GetOrderListQuery {
  @IsNotEmpty()
  public userId: string;
}

export class CreateOrderBody {
  @IsNotEmpty()
  public userId: string;

  @IsNotEmpty()
  public sessionId: string;

  @IsNotEmpty()
  public deliveryId: number;

  @IsNotEmpty()
  public paySystemId: number;

  @IsNotEmpty()
  public price: number;

  @IsNotEmpty()
  public props: OrderProps;

  @IsString()
  public comment: string;
}
