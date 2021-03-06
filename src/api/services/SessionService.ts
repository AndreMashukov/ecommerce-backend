import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import moment from 'moment';
import uuid from 'uuid';
import { DeleteResult } from 'typeorm';

import { Session } from '../models/Session';
import { SessionRepository } from '../repositories/SessionRepository';

@Service()
export class SessionService {
  constructor(@OrmRepository() private sessionRepository: SessionRepository) {}

  public find(): Promise<Session[]> {
    return this.sessionRepository.find();
  }

  public async clearOldSessions(): Promise<DeleteResult> {
    return this.sessionRepository.clearOldSessions();
  }

  public async createNewSession(): Promise<Session | undefined> {
    return this.sessionRepository.save({
      id: uuid.v1(),
      dateInsert: moment().format('YYYY-MM-DD HH:mm:ss'),
      dateUpdate: moment().format('YYYY-MM-DD HH:mm:ss')
    });
  }
}
