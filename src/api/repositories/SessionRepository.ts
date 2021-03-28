import { DeleteResult, EntityRepository, Repository } from 'typeorm';

import { Session } from '../models/Session';

@EntityRepository(Session)
export class SessionRepository extends Repository<Session> {
  public clearOldSessions(): Promise<DeleteResult> {
    return this.createQueryBuilder()
      .delete()
      .from('b_sale_session')
      .where('date_update < :date', { date: new Date() })
      .execute();
  }
}
