import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Element } from '../models/Element';
import { ElementRepository } from '../repositories/ElementRepository';

@Service()
export class ElementService {
  constructor(
    @OrmRepository() private elementRepository: ElementRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public findByBlockAndSectionId(_blockId: number, _sectionId: number): Promise<Element[]> {
    this.log.info('Find all Elements for section', _sectionId);
    return this.elementRepository.find({
      where: {
        blockId: _blockId,
        sectionId: _sectionId,
      },
    });
  }
}
