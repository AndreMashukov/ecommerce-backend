import { Get, JsonController, Post } from 'routing-controllers';

import { SessionService } from '../services/SessionService';
import { Session } from '../models/Session';

@JsonController('/session')
export class SessionController {
  constructor(
    private sessionService: SessionService,
  ) {}

  @Get('/')
  public getAllSessions(): Promise<Session[] | undefined> {
      return this.sessionService.find();
  }

  @Post('/')
  public createNewSession(): Promise<Session> {
      return this.sessionService.createNewSession();
  }
}
