import { EntityRepository, Repository } from 'typeorm';

import { Session } from '../models/Session';

@EntityRepository(Session)
export class SessionRepository extends Repository<Session> {}
