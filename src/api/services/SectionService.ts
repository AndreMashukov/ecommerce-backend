import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Section } from '../models/Section';
import { SectionRepository } from '../repositories/SectionRepository';

@Service()
export class SectionService {
  public relations = ['pictureData'];
  constructor(
    @OrmRepository() private sectionRepository: SectionRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<Section[]> {
    this.log.info('Find all sections');
    return this.sectionRepository.find();
  }

  public findByBlockId(blockId: number): Promise<Section[]> {
    return this.sectionRepository.find({
      relations: this.relations,
      where: {
        blockId
      }
    });
  }

  public findChildSections(
    blockId: number,
    code: string
  ): Promise<Section[]> {
    return this.sectionRepository.find({
      relations: this.relations,
      where: {
        blockId,
        parentCode: code
      }
    });
  }

  public findSection(blockId: number, code: string): Promise<Section> {
    return this.sectionRepository.findOne({
      relations: this.relations,
      where: {
        blockId,
        code
      }
    });
  }
}
