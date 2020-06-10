import * as express from 'express';
import { Service } from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { SaleUser } from '../api/models';
import { SaleUserRepository } from '../api/repositories/SaleUserRepository';
import { Logger, LoggerInterface } from '../decorators/Logger';
import * as jwt from 'jsonwebtoken';

@Service()
export class AuthService {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    @OrmRepository() private userRepository: SaleUserRepository
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

  public async validateUser(email: string, password: string): Promise<SaleUser> {
    const user = await this.userRepository.findOne({
      where: {
        email
      }
    });

    if (await SaleUser.comparePassword(user, password)) {
      return user;
    }

    return undefined;
  }
}
