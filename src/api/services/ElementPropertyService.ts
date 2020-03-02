import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';

import { Logger, LoggerInterface } from '../../decorators/Logger';
import { ElementProperty } from '../models/ElementProperty';
import { ElementPropertyRepository } from '../repositories/ElementPropertyRepository';

@Service()
export class ElementPropertyService {
  constructor(
    @OrmRepository() private elementPropertyRepository: ElementPropertyRepository,
    @Logger(__filename) private log: LoggerInterface
  ) {}

  public findByElementId(_elementId: string): Promise<ElementProperty[]> {
    this.log.info('Find all properties for element', _elementId);
    return this.elementPropertyRepository.find({
      where: {
        elementId: _elementId,
      },
    });
  }
}
