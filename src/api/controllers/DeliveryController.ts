import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Get, JsonController, QueryParams } from 'routing-controllers';
import { Delivery } from '../models';
import { DeliveryService } from '../services/DeliveryService';

class GetDeliverysQuery {
  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  public regionId: number;

  @IsNotEmpty()
  @IsPositive()
  @IsNumber()
  public orderPrice: number;
}

@JsonController('/delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Get('/')
  public findByRegionIdAndOrderPrice(
    @QueryParams() query: GetDeliverysQuery
  ): Promise<Delivery[] | undefined> {
    return this.deliveryService.findManyByRegionIdAndOrderPrice(
      query.regionId,
      query.orderPrice
    );
  }
}
