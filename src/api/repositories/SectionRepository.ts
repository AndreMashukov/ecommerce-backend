import { EntityRepository, Repository } from 'typeorm';

import { Section } from '../models/Section';

@EntityRepository(Section)
export class SectionRepository extends Repository<Section> {}
