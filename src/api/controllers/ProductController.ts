import { IsNotEmpty, IsNumber, IsPositive } from 'class-validator';
import { Get, JsonController, QueryParams } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Element } from '../models/Element';
import { ElementService } from '../services/ElementService';

export class ProductResponse {
  @IsNumber()
  public id: number;

  @IsNumber()
  public sectionId: number;

  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public code: string;
}

class GetProductsQuery {
  @IsPositive()
  public blockId: number;

  @IsPositive()
  public sectionId: number;
}

@JsonController('/products')
export class ProductController {
  constructor(private elementService: ElementService) {}

  @Get('/')
  @ResponseSchema(ProductResponse)
  public find(@QueryParams() query: GetProductsQuery): Promise<Element[] | undefined> {
      return this.elementService.findByBlockAndSectionId(query.blockId, query.sectionId);
  }
}
