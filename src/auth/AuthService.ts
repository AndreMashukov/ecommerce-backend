import * as express from 'express';
import { Service } from 'typedi';
// import { OrmRepository } from 'typeorm-typedi-extensions';
import { SaleUser } from '../api/models';
// import { SaleUserRepository } from '../api/repositories/SaleUserRepository';
import { Logger, LoggerInterface } from '../decorators/Logger';
import * as jwt from 'jsonwebtoken';
import { SaleUserService } from '../api/services/SaleUserService';

@Service()
export class AuthService {
  constructor(
    @Logger(__filename) private log: LoggerInterface,
    // @OrmRepository() private saleUserRepository: SaleUserRepository,
    private saleUserService: SaleUserService
  ) {}

  public parseBasicAuthFromRequest(
    req: express.Request
  ): { userId: string, userRole: number } {
    const authorization = req.header('authorization');
    if (authorization && authorization.split(' ')[0] === 'Bearer') {
      const token =  authorization.split(' ')[1];
      // decode when fetching the user from token
      let decoded;
      try {
        decoded = jwt.verify(token, process.env.APP_JWT_SECRET);
      } catch (err) {
        return undefined;
      }
      const userId =  decoded.id;
      const userRole = decoded.groupId;
      if (userId) {
        return { userId, userRole };
      }
    }

    this.log.info('No credentials provided by the client');
    return undefined;
  }

  public async validateUser(email: string, password: string): Promise<SaleUser | undefined> {
    const user: SaleUser = await this.saleUserService.findOneByEmail(email);

    if (!user) {
      return undefined;
    }

    if (await SaleUser.comparePassword(user, password)) {
      return user as SaleUser;
    }

    return undefined;
  }
}
