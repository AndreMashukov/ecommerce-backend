import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import moment from 'moment';

import { Session } from '../models/Session';
import { SessionRepository } from '../repositories/SessionRepository';

@Service()
export class SessionService {
  constructor(
    @OrmRepository() private sessionRepository: SessionRepository
  ) {}

  public find(): Promise<Session[]> {
    return this.sessionRepository.find();
  }

  public async createNewSession(): Promise<Session | undefined> {
    return this.sessionRepository.save({
      dateInsert: moment().format('YYYY-MM-DD HH:mm:ss'),
      dateUpdate: moment().format('YYYY-MM-DD HH:mm:ss'),
    });
  }
}
