import { IsNotEmpty, IsNumber } from 'class-validator';
import { Get, JsonController, OnUndefined, Param } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Section } from '../models/Section';
import { SectionService } from '../services/SectionService';
import { SectionNotFoundError } from '../errors/SectionNotFoundError';

class BaseSection {
  @IsNotEmpty()
  public name: string;

  @IsNotEmpty()
  public description: string;

  @IsNotEmpty()
  public code: string;

  @IsNumber()
  public blockId: number;

  @IsNumber()
  public sectionId: number;
}

export class SectionResponse extends BaseSection {
  @IsNumber()
  public id: string;
}

@JsonController('/sections')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  @ResponseSchema(SectionResponse, { isArray: true })
  public find(): Promise<Section[]> {
    return this.sectionService.find();
  }

  @Get('/:blockId')
  @OnUndefined(SectionNotFoundError)
  @ResponseSchema(SectionResponse)
  public one(@Param('blockId') blockId: string): Promise<Section[] | undefined> {
      return this.sectionService.findByBlockId(blockId);
  }
}
