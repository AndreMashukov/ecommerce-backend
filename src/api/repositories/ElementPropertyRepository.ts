import { EntityRepository, Repository } from 'typeorm';

import { ElementProperty } from '../models/ElementProperty';

@EntityRepository(ElementProperty)
export class ElementPropertyRepository extends Repository<ElementProperty> {
  /**
   * Find by elementId is used for our data-loader to get all needed pets in one query.
   */
  public findByElementIds(ids: string[]): Promise<ElementProperty[]> {
    return this.createQueryBuilder()
      .select()
      .where(`b_iblock_element_property.iblock_element_id IN (${ids.map(id => `'${id}'`).join(', ')})`)
      .getMany();
  }
}
