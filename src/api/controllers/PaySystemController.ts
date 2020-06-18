import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Get, JsonController, QueryParams } from 'routing-controllers';
import { PaySystem } from '../models';
import { PaySystemService } from '../services/PaySystemService';

class GetPaymentSystemsQuery {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  public regionId: number;
}

@JsonController('/pay_system')
export class PaySystemController {
  constructor(private paySystemService: PaySystemService) {}

  @Get('/')
  public findByRegionId(
    @QueryParams() query: GetPaymentSystemsQuery
  ): Promise<PaySystem[] | undefined> {
    return this.paySystemService.findManyByRegionId(
      query.regionId
    );
  }
}
