import { EntityRepository, Repository } from 'typeorm';

import { Element } from '../models/Element';

@EntityRepository(Element)
export class ElementRepository extends Repository<Element>  {

}
