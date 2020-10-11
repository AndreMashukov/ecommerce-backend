import { Get, JsonController, QueryParams } from 'routing-controllers';

import { PaySystem } from '../models';
import { PaySystemService } from '../services/PaySystemService';
import { GetPaymentSystemsQuery } from './requests';

@JsonController('/pay_system')
export class PaySystemController {
  constructor(private paySystemService: PaySystemService) {}

  @Get('/')
  public findByRegionId(
    @QueryParams() { regionId }: GetPaymentSystemsQuery
  ): Promise<PaySystem[] | undefined> {
    return this.paySystemService.findManyByRegionId(
      regionId
    );
  }
}
