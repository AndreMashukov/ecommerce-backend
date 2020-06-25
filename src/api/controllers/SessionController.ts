import { JsonController, Post } from 'routing-controllers';

import { SessionService } from '../services/SessionService';
import { Session } from '../models/Session';

@JsonController('/session')
export class SessionController {
  constructor(
    private sessionService: SessionService
  ) {}

  @Post('/')
  public createNewSession(): Promise<Session> {
      return this.sessionService.createNewSession();
  }
}
