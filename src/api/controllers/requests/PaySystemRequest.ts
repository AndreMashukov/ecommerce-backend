import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class GetPaymentSystemsQuery {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  public regionId: number;
}
