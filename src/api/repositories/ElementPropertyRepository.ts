import { EntityRepository, Repository } from 'typeorm';

import { ElementProperty } from '../models/ElementProperty';

@EntityRepository(ElementProperty)
export class ElementPropertyRepository extends Repository<ElementProperty> {
  public findByElementId(id: number): Promise<ElementProperty[]> {
    return this.createQueryBuilder()
      .select()
      .where(`b_iblock_element_property.iblock_element_id = ${id}`)
      .getMany();
  }
}
