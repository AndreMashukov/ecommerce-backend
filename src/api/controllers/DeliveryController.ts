import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Get, JsonController, QueryParams } from 'routing-controllers';
// import { ResponseSchema } from 'routing-controllers-openapi';

import { Delivery } from '../models';
import { DeliveryService } from '../services/DeliveryService';

export class DeliveryResponse {
  @IsNumber()
  public id: number;

  @IsNotEmpty()
  public name: number;

  @IsNotEmpty()
  public periodFrom: string;

  @IsNotEmpty()
  public periodTo: string;

  @IsNotEmpty()
  public orderPriceFrom: number;

  @IsNotEmpty()
  public orderPriceTo: number;

  @IsNotEmpty()
  public active: string;

  @IsNotEmpty()
  public price: string;

  @IsNotEmpty()
  public description: string;
}

class GetDeliverysQuery {
  @IsNotEmpty()
  @IsPositive()
  public regionId: number;

  @IsNotEmpty()
  @IsPositive()
  public orderPrice: number;
}

@JsonController('/delivery')
export class DeliveryController {
  constructor(private deliveryService: DeliveryService) {}

  @Get('/')
  // @ResponseSchema(DeliveryResponse, { isArray: true })
  public findByRegionIdAndOrderPrice(
    @QueryParams() query: GetDeliverysQuery
  ): Promise<Delivery[] | undefined> {
    return this.deliveryService.findManyByRegionIdAndOrderPrice(
      query.regionId,
      query.orderPrice
    );
  }
}
