import { EntityRepository, Repository } from 'typeorm';
import { File } from '../models';

@EntityRepository(File)
export class FileRepository extends Repository<File> {}
