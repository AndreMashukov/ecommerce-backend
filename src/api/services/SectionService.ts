import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Section } from '../models/Section';
import { SectionRepository } from '../repositories/SectionRepository';

@Service()
export class SectionService {
  constructor(
    @OrmRepository() private sectionRepository: SectionRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public find(): Promise<Section[]> {
    this.log.info('Find all sections');
    return this.sectionRepository.find();
  }

  public findByBlockId(_blockId: number): Promise<Section[]> {
    this.log.info('Find all sections for block', _blockId);
    return this.sectionRepository.find({
      where: {
        blockId: _blockId
      }
    });
  }

  public findChildSections(
    _blockId: number,
    _code: string
  ): Promise<Section[]> {
    return this.sectionRepository.find({
      where: {
        blockId: _blockId,
        parentCode: _code
      }
    });
  }

  public findSection(_blockId: number, _code: string): Promise<Section> {
    return this.sectionRepository.findOne({
      where: {
        blockId: _blockId,
        code: _code
      }
    });
  }
}
