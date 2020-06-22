import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { Element } from '../models/Element';
import { ElementRepository } from '../repositories/ElementRepository';
import { SectionService } from '../services/SectionService';

@Service()
export class ElementService {
  constructor(
    @OrmRepository() private elementRepository: ElementRepository,
    private sectionService: SectionService
  ) {}

  public findByBlockAndSectionId(
    blockId: number,
    sectionId: number
  ): Promise<Element[]> {
    return this.elementRepository.find({
      relations: ['properties'],
      where: {
        blockId,
        sectionId
      }
    });
  }

  public async findDeeplyByBlockAndSectionCode(
    blockId: number,
    sectionCode: string
  ): Promise<Element[]> {
    const promises = [];
    const childSections = await this.sectionService.findChildSections(
      blockId,
      sectionCode
    );
    if (childSections.length > 0) {
      childSections.forEach((item) => {
        promises.push(
          this.findByBlockAndSectionId(blockId, parseInt(item.id, 0))
        );
      });
    } else {
      const section = await this.sectionService.findSection(
        blockId,
        sectionCode
      );
      promises.push(
        this.findByBlockAndSectionId(blockId, parseInt(section.id, 0))
      );
    }
    return Promise.all(promises);
  }

  public findByBlockAndCode(blockId: number, code: string): Promise<Element> {
    return this.elementRepository.findOne({
      relations: ['properties'],
      where: {
        blockId,
        code
      }
    });
  }
}
