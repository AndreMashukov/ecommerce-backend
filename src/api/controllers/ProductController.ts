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

  @IsNotEmpty()
  public sectionCode: string;
}

class GetProductsShallowQuery {
  @IsPositive()
  public blockId: number;

  @IsNotEmpty()
  public sectionId: string;
}

class GetProductByCode {
  @IsPositive()
  public blockId: number;

  @IsNotEmpty()
  public code: string;
}

@JsonController('/products')
export class ProductController {
  constructor(private elementService: ElementService) {}

  @Get('/')
  @ResponseSchema(ProductResponse, { isArray: true })
  public findBySectionCode(
    @QueryParams() query: GetProductsQuery
  ): Promise<Element[] | undefined> {
    return this.elementService.findDeeplyByBlockAndSectionCode(
      query.blockId,
      query.sectionCode
    );
  }

  @Get('/code')
  @ResponseSchema(ProductResponse)
  public findByProductCode(
    @QueryParams() query: GetProductByCode
  ): Promise<Element | undefined> {
    return this.elementService.findByBlockAndCode(query.blockId, query.code);
  }

  @Get('/shallow')
  @ResponseSchema(ProductResponse, { isArray: true })
  public findShallowBySectionCode(
    @QueryParams() query: GetProductsShallowQuery
  ): Promise<Element[] | undefined> {
    return this.elementService.findByBlockAndSectionId(
      query.blockId,
      parseInt(query.sectionId, 0)
    );
  }
}
