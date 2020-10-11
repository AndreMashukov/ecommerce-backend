import { Get, JsonController, QueryParams } from 'routing-controllers';

import { Delivery } from '../models';
import { DeliveryService } from '../services/DeliveryService';
import { GetDeliveriesQuery } from './requests';

@JsonController('/delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Get('/')
  public findByRegionIdAndOrderPrice(
    @QueryParams() { regionId, orderPrice }: GetDeliveriesQuery
  ): Promise<Delivery[] | undefined> {
    return this.deliveryService.findManyByRegionIdAndOrderPrice(
      regionId,
      orderPrice
    );
  }
}
