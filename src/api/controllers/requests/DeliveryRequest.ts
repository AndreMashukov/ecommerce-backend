import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class GetDeliveriesQuery {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  public regionId: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  public orderPrice: number;
}
