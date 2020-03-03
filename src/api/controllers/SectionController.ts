import { IsPositive } from 'class-validator';
import { Get, JsonController, OnUndefined, QueryParams } from 'routing-controllers';
import { ResponseSchema } from 'routing-controllers-openapi';

import { Section } from '../models/Section';
import { SectionService } from '../services/SectionService';
import { SectionNotFoundError } from '../errors/SectionNotFoundError';

export class SectionResponse {
  public sections: Section[];
}

class GetChildSectionsQuery {
  @IsPositive()
  public blockId: number;

  @IsPositive()
  public sectionId: number;
}

class GetSectionsQuery {
  @IsPositive()
  public blockId: number;
}

@JsonController('/sections')
export class SectionController {
  constructor(private sectionService: SectionService) {}

  @Get()
  @ResponseSchema(SectionResponse, { isArray: true })
  public find(): Promise<Section[]> {
    return this.sectionService.find();
  }

  @Get('/block')
  @OnUndefined(SectionNotFoundError)
  @ResponseSchema(SectionResponse, { isArray: true })
  public findByBlockId(@QueryParams() query: GetSectionsQuery): Promise<Section[] | undefined> {
      return this.sectionService.findByBlockId(query.blockId);
  }

  @Get('/children')
  @ResponseSchema(SectionResponse, { isArray: true })
  public async findChildSections(@QueryParams() query: GetChildSectionsQuery): Promise<Section[] | undefined> {
      return this.sectionService.findChildSections(query.blockId, query.sectionId);
  }
}
