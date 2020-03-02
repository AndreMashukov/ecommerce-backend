import { IsNotEmpty, IsNumber } from 'class-validator';
import { Get, JsonController, Param } from 'routing-controllers';
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

@JsonController('/products')
export class ProductController {
  constructor(private elementService: ElementService) {}

  @Get('/:sectionId')
  @ResponseSchema(ProductResponse)
  public find(@Param('sectionId') sectionId: string): Promise<Element[] | undefined> {
      return this.elementService.findBySectionId(sectionId);
  }
}
