
import { IsNotEmpty } from 'class-validator';
import { OrderProps } from 'src/api/models';

export class OrderResponse {
  @IsNotEmpty()
  public id: number;

  @IsNotEmpty()
  public userId: string;

  public props: OrderProps;
}
