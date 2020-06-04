import * as express from 'express';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { User } from '../api/models/User';
import { UserRepository } from '../api/repositories/UserRepository';
import { Logger, LoggerInterface } from '../decorators/Logger';
import * as jwt from 'jsonwebtoken';

@Service()
export class AuthService {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @OrmRepository() private userRepository: UserRepository
  ) {}

  public parseBasicAuthFromRequest(
    req: express.Request
  ): { userId: string, userRole: number } {
    const authorization = req.header('authorization');
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      const token =  authorization.split(' ')[1];
      // decode when fetching the user from token
      const decoded = jwt.verify(token, process.env.APP_JWT_SECRET);
      const userId =  decoded.id;
      const userRole = decoded.groupId;
      if (userId) {
        return { userId, userRole };
      }
    }

    this.log.info('No credentials provided by the client');
    return undefined;
  }

  public async validateUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: {
        username
      }
    });

    if (await User.comparePassword(user, password)) {
      return user;
    }

    return undefined;
  }
}
