import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { Element } from '../models/Element';
import { ElementRepository } from '../repositories/ElementRepository';
import { SectionService } from '../services/SectionService';

@Service()
export class ElementService {
  constructor(
    @OrmRepository() private elementRepository: ElementRepository,
    private sectionService: SectionService,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public findByBlockAndSectionId(_blockId: number, _sectionId: number): Promise<Element[]> {
    this.log.info('Find all Elements for section', _sectionId);
    return this.elementRepository.find({
      relations: ['properties'],
      where: {
        blockId: _blockId,
        sectionId: _sectionId,
      },
    });
  }

  public async findDeeplyByBlockAndSectionCode(_blockId: number, _sectionCode: string): Promise<Element[]> {
    const promises = [];
    const childSections = await this.sectionService.findChildSections(_blockId, _sectionCode);
    if (childSections.length > 0) {
      childSections.forEach(item => {
        promises.push(this.findByBlockAndSectionId(_blockId, parseInt(item.id, 0)));
      });
    } else {
      const section = await this.sectionService.findSection(_blockId, _sectionCode);
      promises.push(this.findByBlockAndSectionId(_blockId, parseInt(section.id, 0)));
    }
    return Promise.all(promises);
  }

  public findByBlockAndCode(_blockId: number, _code: string): Promise<Element> {
    this.log.info('Find Element for code', _code);
    return this.elementRepository.findOne({
      relations: ['properties'],
      where: {
        blockId: _blockId,
        code: _code,
      },
    });
  }
}
